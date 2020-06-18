let input = prompt('enter number that you want to reverse');

function reverse(str) {

    if (Number(str) < 0) {
        return ("-" + str.slice(1).split("").reverse().join(""))
    } else {
        return str.split("").reverse().join("");
    }
}

console.log(`your number : ${input}\nreverse number : ${reverse(input)}`);