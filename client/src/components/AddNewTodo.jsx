export default function AddNewTodo({getTodos}) {
    const handleNewTodoSubmit = async (evt) => {
        evt.preventDefault();

        try {
            await fetch("http://localhost:3001/api/v1/todos", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    message: document.querySelector("#newTodoMessage").value,
                })
            })
        } catch (err) {
            console.log(err);
        }

        getTodos();
    }

    return (
        <form id="newTodoForm" onSubmit={handleNewTodoSubmit}>
            <input  id="newTodoMessage" className="jost-regular-normal" minLength={1} pattern="^.*\S+.*$" title="At least 1 non-whitespace character must be specified" placeholder="Todo..." required/>
            <button className="jost-semibold-normal">Submit</button>
        </form>
    );
}
