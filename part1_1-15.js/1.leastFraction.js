let fraction = prompt('enter fraction number'),
    fragment = prompt('enter fragment number'),
    i = 2

while (fraction >= i && fragment >= i) {
    while (fraction % i == 0 && fragment % i == 0) {
        fraction = fraction / i
        fragment = fragment / i
    }
    i++
}

let fr = `${fraction}/${fragment}`
console.log(`least fraction is ${fr}`)