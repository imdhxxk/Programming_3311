import './todolist.css';
import TodoHeader from './components/TodoHeader.jsx';
import TodoAdder from './components/TodoAdder.jsx';
import TodoList from './components/TodoList.jsx';
import { useEffect, useState } from 'react';



class Todo {
    constructor(text) {
        this.id = Date.now(); //할일 id:고유의 값 == now Date().getTime()
        this.text = text;    //할일의 내용
        this.isCompleted = false;   //할일 완료 여부
    }
}

const TODOS_STORAGE_KEY = "todos";
export default function TodoListApp() {

    const initTodo = () => {
        const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
        return savedTodos ? JSON.parse(savedTodos) : [];
    }

    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
    }, [todos]);
    const addTodo = (text) => setTodos((todos) => [
        //기존 todos 복사
        //new todo 만들어서
        //뒤에 추가하자
        ...todos,
        new Todo(text)

    ]);
    const toggleTodo = (id) => {
        setTodos((todos) =>
            //todos에서 하나씩 꺼내어 todo. todo의 id 와id가 같담ㄴ, 기존 todo.isCOmpleted의 반대값으로 isCompleted를 수정 아니면 그대로
            todos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        )
    }
    const deleteTodo = (id) => {
        //todos에서 하나씩 꺼내어 todo. todo의 id 와id가 같다면, 그 todo는 빼고 나머지 그대로
        setTodos((todos) =>
            todos.filter((todo) => todo.id !== id))
    }

    const editTodo = (id, newText) => {
        //todos에서 하나씩 꺼내어 todo. todo의 id 와id가 같다면, 그 todo는 text를 newText로 바꿔주고 나머지 그대로
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        )
    }






    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
    );

}