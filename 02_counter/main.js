// h1에 있는 숫자 요소를 가져오자
// button에 있는 + 요소를 가져오자

let num = 0
                
// const resultH1 = document.getElementsByTagName("h1")[0]
const resultH1 = document.getElementById("result")
// const plusButton = document.getElementsByClassName("plus")[0]
              
// // plusButton.addEventListener("click", () => {
// //     num++
// //     resultH1.innerHTML = num
// // })
// plusButton.onclick = () => {
//     num++
//     resultH1.innerHTML = num
// }

const update = (number = 1) => {
    // if(number == 0){
    //     num=number;
    // }else{
    //     num+=number
    // }
    num+=number

    resultH1.innerHTML = num;
}
const reset = () => {
    num = 0;
    resultH1.innerHTML = num;
}