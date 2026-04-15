import './todolist.css';
import TodoHeader from './components/TodoHeader.jsx';
import TodoAdder from './components/TodoAdder.jsx';
import TodoList from './components/TodoList.jsx';
import { useState } from 'react';

class Todo {
    constructor(text) {
        this.id = Date.now(); //할일 id:고유의 값 == now Date().getTime()
        this.text = text;    //할일의 내용
        this.isCompleted = false;   //할일 완료 여부
    }
}

export default function TodoListApp() {
    const [todos,setTodos] = useState([]);
    const addTodo = (text) => setTodos((todos) => [
        //기존 todos 복사
        //new todo 만들어서
        //뒤에 추가하자
        ...todos,
        new Todo(text)
        
 
    ]);

    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo}/>
            <TodoList />
        </div>
    );

}