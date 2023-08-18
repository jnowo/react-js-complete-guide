import {FC, useContext} from "react";
import {TodoItem} from "./TodoItem";
import classes from "./Todos.module.css";
import {TodosContext} from "../store/todos-context";

//FC - function that act as a functional component
export const Todos: FC = () => {
    const todosContext = useContext(TodosContext);
    return (
        <ul className={classes.todos}>
            {todosContext.items.map((todo) => (
                <TodoItem key={todo.id}
                          text={todo.text}
                          onRemoveTodo={todosContext.removeTodo.bind(null, todo.id)}/>
            ))}
        </ul>
    )
}