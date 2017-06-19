function permMissingElem(A) {
    let result;
    let sort = A.sort((a,b) => a-b)
    function find(A) {
        if(sort[sort.length-1] != (sort.length + 1)) return (sort.length + 1)

        for (let i = 1; i < sort.length; i++) {
            if(sort[i] - sort[i-1] != 1) {
            result = sort[i]-1;
            }
        }
        return result
    }
    result = (sort[0] !== 1) ? 1 : find(A)

    return result
}

function frogJmp(X, Y, D) {
    let result;
    function calcJmp (X, Y, D) {
        let dtc = (Y - X);
        result = (D >= dtc) ? 1 :
            (dtc % D === 0) ? (dtc / D) :
            (Math.floor((dtc / D) + 1))
        return result;
    }
    result = (Y <= X) ? 0 : calcJmp(X, Y, D);
    return result;
}
