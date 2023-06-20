function sortedFrequency(arr, num) {
    let high = arr.length - 1;
    let low = 0;
    let mid = Math.floor(high / 2)
    let top = 0;
    let bottom = 0;
    while (high >= low) {
        if (arr[mid] < num) {
            mid = Math.floor((high + (mid + 1)) / 2);
        } else if (arr[mid] > num) {
            mid = Math.floor((low + (mid - 1)) / 2);
        } else if (arr[mid] == num && arr[mid] + 1 > num) {
            top = arr[mid];
        } else if (arr[mid] == num && arr[mid] - 1 < num) {
            bottom = arr[mid];
        }
        if (top > 0 && bottom > 0) {
            return top - bottom;
        }
    }
}

module.exports = sortedFrequency