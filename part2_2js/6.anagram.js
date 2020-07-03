function isTheSameAnagram(str1, str2) {
    let string1 = String(str1).replace(/[^A-Za-z]+/g, '').toLowerCase(),
        string2 = String(str2).replace(/[^A-Za-z]+/g, '').toLowerCase();
    
    let charMap1 = getCharMap(string1),
        charMap2 = getCharMap(string2);
    
    if (string1.length < string2.length || string2.length === string1.length) {
        for (let char in charMap1) {
            if (charMap1[char] !== charMap2[char]) {
                return `${str1} is not an anagram of ${str2}`
            }
        }
        return `${str1} is an anagram of ${str2}`
    }
    if (string1.length > string2.length) {
        for (let char in charMap2) {
            if (charMap2[char] !== charMap1[char]) {
                return `${str2} is not an anagram of ${str1}`
            }
        }
        return `${str2} is an anagram of ${str1}`
    }
}

function getCharMap(str) {
    let charMap = {};
    
    for (let char of str) {
        charMap[char] = charMap[char] +1 || 1
    }
    return charMap
}


console.log(isTheSameAnagram("bat", "ab"))