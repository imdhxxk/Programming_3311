import Button from './Button.jsx';
import { useState } from 'react';

export default function TodoAdder({ addTodo }) {
    const [inputTodo, setInputTodo] = useState('');
    //submit 이면 handleSubmit 실행
    //handleSubmit
    //text 받아서 addTodo(text) 실행
    const handleSubmit = (event) => {
        event.preventDefault(); //submit 이벤트의 기본 동작인 페이지 새로고침 방지
        if(!inputTodo) return; //인풋이 비어있으면 추가하지 않음

        addTodo(inputTodo.trim()); //인풋의 앞뒤 공백 제거해서 추가
        setInputTodo(''); //인풋 초기화
    }
    return (
        <form className="todo__form" onSubmit={handleSubmit}>
            <input type="text"
                name="todo"
                id="todo"
                className="todo__input"
                placeholder="할 일 입력해라" 
                value={inputTodo}
                onChange={(event) => setInputTodo(event.target.value)}
            />
            <Button type="submit" className="todo__button todo__button--add">Add</Button>
        </form>
    )
}
