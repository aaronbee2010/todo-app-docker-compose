import { useEffect, useState } from "react";
import AddNewTodo from "./components/AddNewTodo";
import TodoTable from "./components/TodoTable";

export default function App() {
    const [ todos, setTodos ] = useState([]);

    const getTodos = async () => {
        try {
            const res = await fetch("http://localhost:3001/api/v1/todos");
            const data = await res.json();
            setTodos(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <main className="jost-regular-normal">
            <span className="jost-extrabold-normal h1-size">Todo App</span>

            <h3>Add new Todo</h3>
            <AddNewTodo getTodos={getTodos} />

            <h3>Current Todos</h3>
            <TodoTable todos={todos} isComplete={false} getTodos={getTodos} />

            <h3>Completed Todos</h3>
            <TodoTable todos={todos} isComplete={true} getTodos={getTodos} />
        </main>
    )
}
