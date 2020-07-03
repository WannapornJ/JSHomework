function numberOfJumpFrog(speed, distance) {
    let result = Math.ceil(distance / speed)
    return `number of jumps is ${result}`
}

console.log(numberOfJumpFrog(5, 26))