import React from 'react'
import Checkbox from './Checkbox'
import Button from './Button'

export default function TodoItem({ todo }) {
    return (
        // todo.isCompleted이 true면, todo_item--completed 클래스 추가, 아니면 말고
        <li className={`todo_item${todo.isCompleted ? ' todo_item--completed' : ""}`}>
            <Checkbox id={todo.id}>{todo.text}</Checkbox>
            <Button className="todo__button todo__button--edit">✏️</Button>
            <Button className="todo__button todo__button--delete">❌</Button>
        </li>
    )
}
