import './todolist.css';
import TodoItemEmpty from './components/TodoItemEmpty.jsx';
import Button from './components/Button.jsx'
import Checkbox from './components/Checkbox.jsx';

export default function TodoListApp() {
    return (
        <div className="todo">
            <h1 className="todo__title">No Think, Do It.</h1>
            <form className="todo__form">
                <input type="text" name="todo" id="todo" className="todo__input" placeholder="할 일 입력해라"/>
                <Button type="submit" className="todo__button todo__button--add">Add</Button>
            </form>
            <ul className="todo__list">
                <TodoItemEmpty />

                <li className="todo__item todo__item--complete">
                    <Checkbox id="1">Todo1</Checkbox>
                    <Button className="todo__button todo__button--edit">✏️</Button>
                    <Button className="todo__button todo__button--delete">❌</Button>
                </li>

                <li className="todo__item todo__item--complete">
                    <Checkbox id="2">Todo2</Checkbox>
                    
                    <Button className="todo__button todo__button--edit">✏️</Button>
                    <Button className="todo__button todo__button--delete">❌</Button>
                </li>
            </ul>
        </div>
    );

}