import {FC, FormEvent, useRef} from "react";
import classes from "./NewTodo.module.css";

export const NewTodo: FC<{ onAddTodo: (text: string) => void }> = (props) => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;

        if (enteredText.trim().length === 0) {
            //throw an error
            return;
        }

        props.onAddTodo(enteredText);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={todoTextInputRef}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}