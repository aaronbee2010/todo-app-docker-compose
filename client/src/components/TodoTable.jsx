export default function TodoTable({todos, isComplete, getTodos}) {
    const markAsComplete = async (id) => {
        try {
            await fetch(`http://localhost:3001/api/v1/todos/${id}/complete`, {
                method: "PATCH",
            });
        } catch (err) {
            console.log(err);
        }

        getTodos();
    }

    const rows = todos
        .filter(todo => {
            return todo.iscomplete === isComplete;
        })
        .map(todo => {
            const date = new Date(todo.datemodified);
            return (
                <tr key={todo.id}>
                    <td>{todo.message}</td>
                    <td>{date.toLocaleString('en-GB', { timeZone: 'Europe/London' })}</td>
                    {(!isComplete) && <td><button onClick={() => {markAsComplete(todo.id)}} className="jost-semibold-normal">Mark As Complete</button></td>}
                </tr>
            );
        });

    if (rows.length === 0) {
        return <span className="jost-semibold-normal">None</span>;
    }
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Todo</th>
                    <th>Date Modified</th>
                    {(!isComplete) && <th></th>}
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}
