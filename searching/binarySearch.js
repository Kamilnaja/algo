// @ts-check
function binarySearch(arr, szukana) {
    let left = 0;
    let right = arr.length - 1;
    let nowSearched;

    while (left <= right) {
        // za małe
        nowSearched = Math.floor((left + right) / 2);
        if (arr[nowSearched] > szukana) {
            right = nowSearched - 1;
        } else if (arr[nowSearched] < szukana) {
            left = nowSearched + 1;
        } else {
            return nowSearched;
        }
    }
    return null;
}

// ma zwrócić indeks
const arr = [1, 2, 3, 10, 30, 40, 50, 54, 60, 70, 80, 90];
let res = binarySearch(arr, 3);
console.log(res)
