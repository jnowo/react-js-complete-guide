import {FC} from "react";
import {Todo} from "../models/Todo";
import {TodoItem} from "./TodoItem";
import classes from "./Todos.module.css";

//FC - function that act as a functional component
export const Todos: FC<{ items: Todo[] }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((todo) => (
                <TodoItem key={todo.id} text={todo.text}/>
            ))}
        </ul>
    )
}