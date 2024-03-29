import {Todo} from "../models/Todo";
import React, {useState} from "react";

type TodosContextObj = {
    items: Todo[],
    addTodo: (todoText: string) => void,
    removeTodo: (id: string) => void,
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {
    },
    removeTodo: (todoId: string) => {
    }
});

export const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        })
    };

    const removeTodoHandler = (id: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== id);
        });
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return (
        <TodosContext.Provider value={contextValue}>
            {props.children}
        </TodosContext.Provider>
    );
};