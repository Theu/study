// function cyclic(A,K) {
//     let thisArray = [];
//     if (A.length === 2) {
//         let head = A[0];
//         let tail = A[1];
//         thisArray = (K%2 === 0)? A : thisArray.concat(tail).concat(head)
//         return thisArray
//     } else {
//     let head = A.slice(0, K-1)
//     let tail = A.slice(K-1)
//     let thisArray = tail.concat(head)
//     return thisArray
//     }
// }

function solutiond(A, K) {
    K = K % A.length;
    console.log(K);
    if (A.length === 0 || A.length === 1 || K === 0) {
        return A;
    }

    let part = A.splice(A.length - K);
    return part.concat(A);
}
