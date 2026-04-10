export default function Button(props){
    //chlidren은 props의 속성 중 하나로, 컴포넌트의 시작 태그와 끝 태그 사이에 위치한 내용을 나타냅니다.
    //children <= props. children, rest <= props.type, props.className
    const { children, ...rest } = props;

    return(
        <button {...rest}>{children}</button>
    )

}