import TodoItemEmpty from "./TodoItemEmpty.jsx";
import TodoItem from "./TodoItem.jsx";


export default function TodoList({todos}) {
    return (
        <ul className="todo__list">
            {/* todos가 비어있을 때, todoItemEmpty */}
            {todos.length === 0 && <TodoItemEmpty />}
            {/* todos에 값이 있으면, Todoitem에 todo를 넣자 */}
            {todos.length > 0 && 
            todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)
                
            }
        </ul>
    )
}
