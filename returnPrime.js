var returnPrime = (n) => {
    var arrayOfPrimes = []; // I need a place to store my results
    for (var int = 2; int <= n; int++) { // here I have to check every int from 0 to my n. I start at 2 because of definition of prime num
        var isPrime = true; // I assume num as prime
        for (var j = 2; j < int; j++){ //still starting at 2 I check my num list to verify my assumption
            (int % j === 0) ? (isPrime = false) : null // I code to make it fail
        }
        (isPrime === true) ? arrayOfPrimes.push(int) : null // I store all prime
    }
    return arrayOfPrimes
}
