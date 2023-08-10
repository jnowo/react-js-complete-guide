import {Todos} from "./components/Todos";
import {Todo} from "./models/Todo";
import {NewTodo} from "./components/NewTodo";

function App() {
    const todos = [
        new Todo('Learn React'),
        new Todo('Learn TypeScript')
    ];

    const addTodoHandler = (todoText: string) => {
        console.log(todoText);
    };

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos items={todos}/>
        </div>
    );
}

export default App;
