import React from "react";
import {Todo} from "../models/todo";

export const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
    )
}