const solution = (A) => {
    let numbers = A;
    numbers.sort();
    for (var i = 0; i < numbers.length; i += 2) {
        if(numbers[i] !== numbers[i+1]) {
            return numbers[i];
        }
    }
    return undefined;
}
