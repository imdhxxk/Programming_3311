import Checkbox from './Checkbox'
import Button from './Button'
import { useState } from 'react';

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false); //수정 중인지 아닌지
    const [editText, setEditText] = useState(todo.text); //수정할 텍스트
    function handleEditClick() {
        if (!isEditing) {
            //edit 시작
            setIsEditing(true);
            setEditText(todo.text); //수정 시작할 때, 기존 텍스트로 초기화
        } else {
            //edit 끝
            const trimmedText = editText.trim();
            if (trimmedText !== todo.text && trimmedText !== "") { //이전 값과 같고, 빈칸이면
                editTodo(todo.id, trimmedText); //수정된 텍스트로 업데이트
            }

            setIsEditing(false);
        }

    }

    return (
        // todo.isCompleted이 true면, todo_item--completed 클래스 추가, 아니면 말고
        <li className={`todo__item${todo.isCompleted ? ' todo__item--complete' : ""}`}>
            {/* 수정중이 아니면 */}
            {!isEditing &&

                <Checkbox
                    id={todo.id}
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                >{todo.text}</Checkbox>
            }
            {/* 수정 중이면 */}
            {isEditing &&
                <input
                    type="text"
                    className='todo__input--edit'
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleEditClick();
                        }
                    }}
                    
                    autoFocus
                />



            }
            <Button
                className="todo__button todo__button--edit"
                onClick={handleEditClick}
            >✏️</Button>
            <Button className="todo__button todo__button--delete" onClick={() => deleteTodo(todo.id)}>
                ❌
            </Button>
        </li>
    )
}
