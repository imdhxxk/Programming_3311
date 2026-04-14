import TodoItemEmpty from "./TodoItemEmpty.jsx";
import todoItem from "./TodoItem.jsx";

import React from 'react'

export default function TodoList() {
    return (
        <ul className="todo__list">
            <TodoItemEmpty />
            <TodoItem id="1" todo="todo1"></TodoItem >


                <li className="todo__item todo__item--complete">
                    <Checkbox id="2">Todo2</Checkbox>

                    <Button className="todo__button todo__button--edit">✏️</Button>
                    <Button className="todo__button todo__button--delete">❌</Button>
                </li>
        </ul>
    )
}
