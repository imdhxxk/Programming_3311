export default function Checkbox(props) {
    const {id,children,...rest} = props;
    return (
        <>
            <input type="checkbox" name="check1" id={`check${id}`} className="todo__check" />
            <label htmlFor={`check${id}`} className="todo__label">{children}</label>
            
        </>
    )
}