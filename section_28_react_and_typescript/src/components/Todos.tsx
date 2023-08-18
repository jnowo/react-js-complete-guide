import {FC} from "react";
import {Todo} from "../models/Todo";
import {TodoItem} from "./TodoItem";
import classes from "./Todos.module.css";

//FC - function that act as a functional component
export const Todos: FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((todo) => (
                <TodoItem key={todo.id}
                          text={todo.text}
                          onRemoveTodo={props.onRemoveTodo.bind(null, todo.id)}/>
            ))}
        </ul>
    )
}