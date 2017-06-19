// var binaryGap = (number) => {
//     let binaryValue = (number >>> 0).toString(2) // I prepare my number
//     if (binaryValue.includes('0') === false) {
//      return 0
//     } else {

//     let useThisToCount = binaryValue.split('1')
//     let checkOnThis = [];
//     console.log(useThisToCount);
//     for(var i = 0; i < useThisToCount.length; i++) {
//         if (useThisToCount[useThisToCount.length-1].includes('0')) {
//             useThisToCount[useThisToCount.length-1] = 'null'
//         }
//         if (useThisToCount[i].includes('0') === false) {
//             useThisToCount[i] = 'null'
//         }
//         if (useThisToCount[i].includes('0')) {
//             checkOnThis.push(useThisToCount[i].length)
//         }

//     }
//     let result = checkOnThis.sort((a,b) => b-a)
//     }
//     // let stringTouse = (preparedBinay.startsWith('s10') && preparedBinay.endsWith('1'))
//     return result[0]
// }

function binaryGap(N) {
    let binaryValue = (N >>> 0).toString(2).replace(/0+$/,'') // I prepare my number

    if (binaryValue.includes('0') === false)  return 0;
    let arrayToTest = binaryValue.split('1')
    var result = [];
    arrayToTest.forEach((i) => (i.includes('0') === false ) ? delete i : result.push(i.length))
    return result.sort((a,b) => b - a)[0]
}
