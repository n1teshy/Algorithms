function binarySearch(list, value) {
    let left = 0;
    let right = list.length - 1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (list[mid] == value) {
            return mid;
        }
        if (value < list[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}


// These are tests
for (let i = 0; i < 1000; i++) {
    const array = Array(1000).fill(0).map((_) => Math.floor(Math.random() * 1000)).sort((a, b) => a - b);
    const valueToSearch = Math.floor(Math.random() * 2000);
    const foundIndex = binarySearch(array, valueToSearch);
    if (foundIndex == -1) {
        if (array.some((item) => item == valueToSearch)) {
            console.log("failed to find value ", valueToSearch, " in ", array);
            console.log("-".repeat(20));
        }
    } else if (valueToSearch !== array[foundIndex]) {
        console.log("failed to find value ", valueToSearch, " in ", array);
        console.log("-".repeat(20));
    }
}