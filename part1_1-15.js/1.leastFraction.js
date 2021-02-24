// let fraction = 100,
//     fragment = 1250,
//     i = 2

// function leastFraction(fraction, fragment) {
//     while (fraction >= i && fragment >= i) {
//         while (fraction % i == 0 && fragment % i == 0) {
//             fraction = fraction / i
//             fragment = fragment / i
//         }
//         i++
//     }

//     let fr = `${fraction}/${fragment}`
//     return `least fraction is ${fr}`
// }

// function recursionLeast(a, b) {

// }

// console.log(leastFraction(fraction, fragment))

function sumToN(n) {
    if (n === 1) return n
    return n + sumToN(n - 1)
}

console.log(sumToN(100))
