let firstNum = Infinity;
let secondNum = Infinity;
let thirdNum = Infinity;
while (true) {
    let min = prompt('enter number')
    if (min == "stop") {
        break;
    }
    else if (Number(min) < firstNum && Number(min) < secondNum && Number(min) < thirdNum) {
        firstNum = secondNum
        secondNum = thirdNum
        thirdNum = Number(min)
    } else if (Number(min) > thirdNum && Number(min) < secondNum) {
        firstNum = secondNum
        secondNum = Number(min)
    } else if (Number(min) > secondNum && Number(min) < firstNum) {
        firstNum = Number(min)
    }
}
console.log(`three minimum number is ${firstNum}, ${secondNum}, ${thirdNum}`)