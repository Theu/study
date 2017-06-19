const makeFourCapital = (string, length) => {
	let arrayToUse = string.split(' ')
	let result = arrayToUse.map(item => item.length === length ? item.toUpperCase() : item.toLowerCase())
	return result.join(' ')
}
