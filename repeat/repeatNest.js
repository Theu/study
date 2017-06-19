const goBack = (element) => {
    var count = 1;
    while (element.parentNode) {
        element = element.parentNode;
        if (element.tagName.toLowerCase() === 'body') {
            return count;
        }
        if (element.tagName.toLowerCase() === 'ul' || element.tagName.toLowerCase() === 'ol') {
            count++;
        }
    }
    return count;
}

const getMax = (elements) => {
    var max = 0;
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var uls = element.querySelectorAll('ul');
        var ols = element.querySelectorAll('ol');
        if(uls.length === 0 && ols.length === 0) {
            var deep = goBack(element);
            if (deep > max) {
                max = deep;
            }
        }
    }
    return max;
}

const solution = () => {
    var uls = document.querySelectorAll('ul');
    var ols = document.querySelectorAll('ol');

    if (uls.length === 0 && ols.length === 0) {
        return 0;
    }

    var max = 0;
    var m = 0;
    if (uls.length > 0) {
        m = getMax(uls);
        if (m > max) {
            max = m
        }
    }
    if (ols.length > 0) {
        m = getMax(ols);
        if (m > max) {
            max = m
        }
    }
    return max
}
