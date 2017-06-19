// const bubbleSort = (arr) => {
//     const arrayToSort = arr;
//     let newArray = [];
//     let exchange;
//     console.log('exchange top', exchange);
//     do {
//         exchange = false;
//         for (let i = 0; i < arrayToSort.length-1; i++) {
//         if(arrayToSort[i] < arrayToSort[i+1]) {
//             let bridge = arrayToSort[i]
//             arrayToSort[i] = arrayToSort[i+1]
//             arrayToSort[i+1] = bridge
//             // console.log(exchange);
//             exchange = true
//         }
//     }
//     } while (exchange)
//     console.log('exchange after', exchange);
//     return arrayToSort
// }

const bubbleSortToUp = (array) => {
    for (i = (array.length-1); i >= 0; i--) {
        // how many time I have to iterate?
        for(j = (array.length-1); j > 0; j--) {
            if (array[j] < array[j - 1]) {
                let bridge = array[j];
                array[j] = array[j - 1];
                array[j - 1] = bridge;
            }
        }
    }
    return array;
}

const bubbleSortToDown = (array) => {
    for (i = 0; i < array.length; i++) {
        for(j = 0; j < array.length; j++) {
            if(array[j] < array[j+1]) {
                let bridge = array[j]
                array[j] = array[j+1]
                array[j+1] = bridge
            }
        }
    }
    return array;
}


