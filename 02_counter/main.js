// h1에 있는 숫자 요소를 가져오자
// button에 있는 + 요소를 가져오자

let num = 100
                
// const resultH1 = document.getElementsByTagName("h1")[0]

const resultH1 = document.getElementById("result")
//const resultH1 = result 가능합니다 하지맘ㄴ 쓰지마라라
// const plusButton = document.getElementsByClassName("plus")[0]
              
// // plusButton.addEventListener("click", () => {
// //     num++
// //     resultH1.innerHTML = num
// // })
// plusButton.onclick = () => {
//     num++
//     resultH1.innerHTML = num
// }
function render(){
    resultH1.innerHTML = num;
}

const update = (number = 1) => {
    // if(number == 0){
    //     num=number;
    // }else{
    //     num+=number
    // }
    num+=number
    render();
}
const reset = () => {
    num = 100;
    render();
}
render();