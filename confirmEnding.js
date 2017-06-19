function confirmEnding(str, target) {
        const targetLength = target.length
        const targetLengthNeg = `-${targetLength}`
        const arrayFromString = str.split(' ')
        const lastInArray = arrayFromString[arrayFromString.length-1]
        const testFromArrayLength = arrayFromString[arrayFromString.length-1].length
        const testFromArrayLengthNeg = `-${testFromArrayLength}`
        let result;
        if(testFromArrayLength >= targetLength) {
            if((arrayFromString.length === 1) || (lastInArray.length >= targetLength)) {
                const arrayFromWord = lastInArray.split('')
                const toTestInLast = arrayFromWord.splice(targetLengthNeg).join('')
            } else if(lastInArray.length >= targetLength) {
                result = (lastInArray === target) ? true : false
            }
        } else if (testFromArrayLength < targetLength) {
                result = false
        }
        return result
}

// const targetLength = target.length
//         console.log('targetLength', targetLength);
//         const targetLengthNeg = `-${targetLength}`
//         const arrayFromString = str.split(' ')
//         const lastInArray = arrayFromString[arrayFromString.length-1]
//         console.log('lastInArray', lastInArray);
//         const testFromArrayLength = arrayFromString[arrayFromString.length-1].length
//         const testFromArrayLengthNeg = `-${testFromArrayLength}`
//         let result;
//         console.log(testFromArrayLength);
//         console.log(arrayFromString.length);
//         if(testFromArrayLength >= targetLength) {
//             if((arrayFromString.length === 1) || (lastInArray.length >= targetLength)) {
//                 const arrayFromWord = lastInArray.split('')
//                 console.log('arrayFromWord', arrayFromWord);
//                 const toTestInLast = arrayFromWord.splice(targetLengthNeg).join('')
//                 console.log('totestinlast', toTestInLast);
//                 result = (toTestInLast === target) ? true : false
//                 console.log(result);
//                 // console.log('toTestInLast', toTestInLast);
//             } else if(lastInArray.length >= targetLength) {
//                 // const arrayFromWord = lastInArray.split('')
//                 // console.log('arrayFromWord', arrayFromWord);
//                 // const toTestInLast = arrayFromWord.splice(targetLength).join('')
//                 result = (lastInArray === target) ? true : false
//             }
//         } else if (testFromArrayLength < targetLength) {
//                 result = false
//         }
//         return result
//         // if (arrayFromString.length > 1)
//         // const result = (arrayFromString[arrayFromString.length-1] === target) ? true : false;
//         // return result;
// }
