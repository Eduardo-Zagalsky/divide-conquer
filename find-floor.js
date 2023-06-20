function findFloor(arr, num) {
    let high = arr.length - 1;
    let low = 0;
    let mid = Math.floor(high / 2);
    let top = 0;
    while (high >= low) {
        if (arr[mid] < num) {
            if (arr[mid] > top) {
                top = arr[mid];
            }
            mid = Math.floor((high + (mid + 1)) / 2);
        } else if (arr[mid] > num) {
            mid = Math.floor((low + (mid - 1)) / 2);
        }
    }
}

module.exports = findFloor