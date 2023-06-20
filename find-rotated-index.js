function findRotatedIndex(arr, num) {
    let high = arr.length - 1;
    let low = 0;
    let mid = Math.floor(high / 2);
    while (high >= low) {
        if (arr[mid] == num) {
            return mid;
        } else if (arr[mid] > num) {
            mid = Math.floor((high + (mid + 1)) / 2);
        } else if (arr[mid] < num) {
            mid = Math.floor((low + (mid - 1)) / 2);
        }
    }
    return -1
}

module.exports = findRotatedIndex