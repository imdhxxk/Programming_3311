export default function TodoListApp() {
    return (
        <div>
            <h1>No Think, Do It.</h1>
            <form>
                <input type="text" name="todo" id="todo" /><button type="submit">Add</button>
            </form>
            <ul id="TodoList">
                <li>
                    <input type="checkbox" name="check1" id="check1" /> 
                    <label htmlFor="check1">Todo 1</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>

                <li>
                    <input type="checkbox" name="check2" id="check2" />
                    <label htmlFor="check2">Todo 2</label>
                    <button>✏️</button>
                    <button>❌</button>
                </li>

            </ul>
        </div>
    );

}