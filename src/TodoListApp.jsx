import './todolist.css';

export default function TodoListApp() {
    return (
        <div className="todo">
            <h1 className="todo__title">No Think, Do It.</h1>
            <form className="todo__form">
                <input type="text" name="todo" id="todo" className="todo__input" placeholder="할 일 입력해라"/>
                <button type="submit" className="todo__button todo__button--add">Add</button>
            </form>
            <ul className="todo__list">
                <li className="todo__item todo__item--empty">
                    <p>할 일 없음.</p>
                </li>

                <li className="todo__item todo__item--complete">
                    <input type="checkbox" name="check1" id="check1" className="todo__check"/>
                    <label htmlFor="check1" className="todo__label">Todo 1</label>
                    <button className="todo__button todo__button--edit">✏️</button>
                    <button className="todo__button todo__button--delete">❌</button>
                </li>

                <li className="todo__item todo__item--complete">
                    <input type="checkbox" name="check2" id="check2" className="todo__check"/>
                    <label htmlFor="check2" className="todo__label">Todo 2</label>
                    <button className="todo__button todo__button--edit">✏️</button>
                    <button className="todo__button todo__button--delete">❌</button>
                </li>
            </ul>
        </div>
    );

}