import {FormEvent} from "react";

export const NewTodo = () => {

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text"/>
            <button type="submit">Add Todo</button>
        </form>
    )
}