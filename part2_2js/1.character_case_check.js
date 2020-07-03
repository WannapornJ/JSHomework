function checkCharacter(str) {
    if (str === str.toUpperCase()) {
        return `all character are capital.`
    } else {
        if (str === str.toLowerCase()) {
            return `all character are small.`
        } else {
            return `character are mix`
        }
    }
}

console.log(checkCharacter("HELLO MA NAME IS AAA"))