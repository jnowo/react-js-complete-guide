import {FC} from "react";
import {Todo} from "../models/Todo";
import {TodoItem} from "./TodoItem";

//FC - function that act as a functional component
export const Todos: FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((todo) => (
                <TodoItem key={todo.id} text={todo.text}/>
            ))}
        </ul>
    )
}