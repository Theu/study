var runLength = (string) => {
    let arrayToCount = string.split('')
    result = arrayToCount.reduce(function(char, occurence) {
        if (!char[occurence]) {
            char[occurence] = 0
        }
        char[occurence]++
        return char
}, {})
    return result
}
