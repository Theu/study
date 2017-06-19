// reduce approach works but I have an object

const mostFrequentInteger = (array) => {
    result = array.reduce((int, amount) => {
        if(!int[amount]) {
            int[amount] = 0
        }
         int[amount]++
         return int
    }, {})

    // now travers
    var max = 2;
    var conta = [];
    maxContainer = [];
    var maxMax = 0;
    for (var amount in result) {
        if(result[amount] >= max) {
            max = result[amount];
            maxContainer.push([max, amount])

        }


    }
    // console.log(result);

        // console.log('maxC', maxContainer);
        newContainer = []
        for (let i = 0; i <= maxContainer.length; i++) {
                console.log('maxL', maxContainer.length);
                console.log('maxContainer[i][0]',maxContainer[i][0])
                console.log('maxContainer[i+1][0]',maxContainer[i+1][0])
            do {
                newContainer = maxContainer.splice(i)
            }
            while(maxContainer[i][0] < maxContainer[i+1][0])
            // {
            //     console.log('carlo', maxContainer[i]);
            //     newContainer = maxContainer.splice(i)
            //     // console.log(newContainer);
            //     // return maxContainer
            // }
        }
return newContainer
}











// try sort

const mostSort = (array) => {
    return array.sort((a,b) => array.filter(int => int===a).length - array.filter(int => int===b).length).pop();
}


//
const findTheMost = (array) => {
    const sortedArray = array.sort();
    let count = 0;
    let max = 2;
    let result = [];
    let resultSort = [];
    let sortedRes = [];
    let finalResult = []
    for (let i = 0; i < sortedArray.length; i++) {
        if(sortedArray[i] === sortedArray[i+1]) {
            count++
        }
        else {
            count = 0
        }
        if (count > max) {
            // result.push([array[i], count+1])
            result = array[i]
            // max = count
        }
    }
    // console.log('result', result);
    //     sortedRes = result.sort((a,b) => b[1] - a[1])
    //     finalResult = sortedRes.filter((a, b) => b[1] === a[1])



    return result
}

//  for (let j = 0; j < result.length; j++) {
//         let sortedRes = result.sort((a,b) => result[j][a] - result[j][b])
//     }
//     console.log(sortedRes);




// const most = (array) => {
//     var L= array.length, freq= [], unique= [],
//     tem, max= 1, index, count;
//     while(L>= max){
//         tem= array[--L];
//         if(unique.indexOf(tem) == -1){
//             unique.push(tem);
//             console.log('unique', unique);
//             index= -1, count= 0;
//             while((index = array.indexOf(tem, index+1))!= -1){
//                 ++count;
//             }
//             if(count> max){
//                 freq= [tem];
//                 max= count;
//             }
//             else if(count== max) freq.push(tem);
//         }
//     }
//     return [freq, max];
// }

