let input = prompt('enter number'),
    storage = [];

while (input !== "stop" && input !== "") {
    if (input === "stop" || input === "") {
        break;
    } else {
        storage.push(Number(input))
    }
    input = prompt('enter next number')
}

function gdc(input) {
    let a, b;
    if (!input.length) {
        return null
    }
    
    a = input[0]
    
    for (let i = 0; i < input.length; i++){
        b = input[i]
        a = gdc_2(a, b)
    }
    return a
}

function gdc_2(c, d) {
    c = Math.abs(c)
    d = Math.abs(d)
    
    while (d) {
        let e = d
        d = c % d
        c = e
    }
    return c
}

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const findGCD = (a, b) => (a === 0 ? b : findGCD(b % a, a));


console.log(gdc(storage))
console.log(storage)