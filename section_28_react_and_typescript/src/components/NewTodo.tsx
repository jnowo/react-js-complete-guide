import {FC, FormEvent, useContext, useRef} from "react";
import classes from "./NewTodo.module.css";
import {TodosContext} from "../store/todos-context";

export const NewTodo: FC = () => {

    const todosContext = useContext(TodosContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }

        todosContext.addTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={todoTextInputRef}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}