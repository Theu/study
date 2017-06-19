function deepNest() {
    var parentTargetNode = document.querySelectorAll('ol')
    var parentTarget = []
        for (i = 0; i < parentTargetNode.length; i++) {
            var parentNodeToArray = parentTargetNode[i];
            parentTarget.push(parentNodeToArray);
        }
        console.log('parentTarget', parentTarget);
    var childrenNode = [];
        for (u = 0; u < parentTarget.length; u++) {
            childrenNode.push([].slice.call(parentTarget[u].querySelectorAll('ul')))
        }
    var childrenArray = [].concat.apply([], childrenNode);
    console.log('childrenArray', childrenArray);
    var parentNode = [];
    var count = 1;
    var testElement;
    console.log(childrenArray.length);
    for (i = 0; i < childrenArray.length; i++) {
            parentNode.push(childrenArray[i].parentNode);
            console.log('a questo punto', parentNode[i]);
            console.log('parentTarget[i]', parentTarget[i]);
            count++;
            testElement = parentNode[i];
            if(testElement !== parentTarget[i]) {
                count++;
                testElemnt = parentNode[i].parentNode;
                console.log('testElement', testElemnt);

            } else if (testElement === parentTarget[i]) {
                return;
            }
        }
    // if(childrenArray.length > 1) {
    //     for (i = 0; i < childrenArray.length; i++) {
    //         parentNode.push(childrenArray[i].parentNode);
    //         console.log('a questo punto', parentNode[i]);
    //         console.log('parentTarget[i]', parentTarget[i]);
    //         count++;
    //         testElement = parentNode[i];
    //         if(testElement !== parentTarget[i]) {
    //             count++;
    //             testElemnt = parentNode[i].parentNode;
    //             console.log('testElement', testElemnt);

    //         } else if (testElement === parentTarget[i]) {
    //             return;
    //         }
    //     }
    // } else {
    //     for (i = 0; i < childrenArray.length; i++) {
    //         parentNode.push(childrenArray[i].parentNode);
    //         console.log('a questo punto', parentNode[i]);
    //         console.log('parentTarget[i]', parentTarget[i]);
    //         count++;
    //         testElement = parentNode[i];
    //         if(testElement !== parentTarget[i]) {
    //             count++;
    //             testElemnt = parentNode[i].parentNode;
    //             console.log('testElement', testElemnt);

    //         } else if (testElement === parentTarget[i]) {
    //             return;
    //         }
    //     }
    // }

    return `Deepest depth is ${count}`;
}

for (i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), i * 0);
}


// setTimeout() {

// }
