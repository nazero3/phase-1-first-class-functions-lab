// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
    return [arr[0], arr[1]];
}

const returnLastTwoDrivers = function (arr) {
    return [arr[arr.length - 2], arr[arr.length - 1]]
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(n) {
    return function () { return n * n };
}
const fareDoubler = function (n) {
    return (2 * n);
}
fareDoubler(createFareMultiplier());

const fareTripler = function (n) {
    return (3 * n);
}
fareTripler(createFareMultiplier());

function selectDifferentDrivers(arr, n) {
    if (n === returnFirstTwoDrivers)
        return returnFirstTwoDrivers(arr);
    else
        return returnLastTwoDrivers(arr);
}