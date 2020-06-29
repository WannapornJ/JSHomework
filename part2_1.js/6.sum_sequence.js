let primeNum = "",
    num = "",
    input = prompt('enter number that you want to sum');

for (let i = 1; i <= input; i = i + 1) {

    let notPrime = false
    for (let j = 2; j <= i; j = j + 1) {
        if (i % j == 0 && j !== i) {
            notPrime = true
        }
    }
    if (notPrime === false && i !== 1) {
        let a = i * (-1)
        primeNum += a
    } else {
        num += i
    }
}

console.log(primeNum + num)
