import Button from './Button.jsx';

export default function TodoAdder() {
    return (
        <form className="todo__form">
            <input type="text" name="todo" id="todo" className="todo__input" placeholder="할 일 입력해라" />
            <Button type="submit" className="todo__button todo__button--add">Add</Button>
        </form>
    )
}
