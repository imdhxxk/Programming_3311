import React from 'react'
import Checkbox from './Checkbox'
import Button from './Button'

export default function TodoItem(props) {
    const  {id,todo,...rest} = props;
    return (
        <li className="todo__item todo__item--complete">
            <Checkbox id={id}>{todo}</Checkbox>
            <Button className="todo__button todo__button--edit">✏️</Button>
            <Button className="todo__button todo__button--delete">❌</Button>
        </li>
    )
}
