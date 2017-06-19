const findUnique = (string) => {
    let prepareString = string.replace(/[^a-zA-Z0-9]/g, '')
    let testArray = prepareString.split('')
    let sortedTestArray = testArray.sort()
    let result = [];
    for (let i = 0; i < sortedTestArray.length; i++) {
        if ((sortedTestArray[i] != sortedTestArray[i+1]) && (sortedTestArray[i] != sortedTestArray[i-1])) {
            result.push(sortedTestArray[i])
        }
    }
    return result
}
