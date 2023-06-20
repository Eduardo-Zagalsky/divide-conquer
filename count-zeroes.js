function countZeroes(arr) {
    let high = arr.length - 1;
    let low = 0;
    let mid = Math.floor(high / 2)
    while (high >= low) {
        if (arr[mid - 1] == 1 && arr[mid] == 0) {
            return arr.length - mid
        } else if (arr[mid + 1] == 1) {
            mid = Math.floor((high + (mid + 1)) / 2);
            continue;
        } else if (arr[mid - 1] == 0) {
            mid = Math.floor(((mid - 1) + low) / 2);
            continue;
        }
    }
}

module.exports = countZeroes