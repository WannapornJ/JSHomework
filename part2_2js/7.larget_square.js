function numberOfSquare(height, width) {
    
    if (height === width) {
        return `the number of largest square is 1`
    } else {
        let gdc;
        if (typeof (height) === "number" && typeof (width) === "number") {
            let h = height,
                w = width;
            while (w) {
                gdc = w
                w = h % w
                h = gdc
            }
        }
        let result = height * width / gdc ** 2
        return `the number of largest square is ${result}`
    }
}

console.log(numberOfSquare(12, 12))
console.log(numberOfSquare(20, 15))