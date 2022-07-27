// @ts-check
function binarySearch(arr, searched) {
    if (searched === undefined) {
        throw new Error('Searched is required')
    }
    const half = Math.floor(arr.length / 2);
    let centerItem = arr[half];
    if (arr.length > 1) {
        if (centerItem === searched) {
            return centerItem
        } else if (centerItem > searched) {
            return binarySearch(getSmallerPart(arr), searched)
        } else {
            return binarySearch(getBiggerPart(arr), searched)
        }
    }
    return arr[0] === searched ? arr[0] : ' item not exists';
}

const half = arr => {
    return Math.floor(arr.length / 2);
}

const getSmallerPart = arr => {
    return arr.splice(0, half(arr))
};

const getBiggerPart = arr => {
    return arr.splice(half(arr));
}

// ma zwrócić indeks
const arr = [1, 2, 3, 10, 30, 40, 50, 54, 60, 70, 80, 90];
let res = binarySearch(arr, 1);
console.log(res)
