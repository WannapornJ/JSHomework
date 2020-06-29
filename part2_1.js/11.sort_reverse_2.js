let input = prompt('enter number'),
    storage = []

while (input !== "stop") {
    if (input === "stop") {
        break;
    } else {
        storage.push(Number(input))
    }
    input = prompt('enter next number')
}

let bool = prompt('enter true or false');

for (let i = 0; i < storage.length; i++) {
    for (let j = 0; j < storage.length - i; j++) {
        if (bool === "true") {
            if (storage[j] > storage[j + 1]) {
                let newStorage = storage[j + 1]
                storage[j + 1] = storage[j]
                storage[j] = newStorage
            }
        } else if (bool === "false") {
            if (storage[j] < storage[j + 1]) {
                let newStorage = storage[j + 1]
                storage[j + 1] = storage[j]
                storage[j] = newStorage
            }
        } else {
            result = "error"
        }
    }
}

console.log(storage)