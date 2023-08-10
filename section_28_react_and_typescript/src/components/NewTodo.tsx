import {FormEvent, useRef} from "react";

export const NewTodo = () => {

    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current?.value;
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={todoTextInputRef}/>
            <button type="submit">Add Todo</button>
        </form>
    )
}