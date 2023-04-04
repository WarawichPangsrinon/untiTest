"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.push = void 0;
var bufferSize = 5;
var writPointer = 0;
var readPointer = 0;
var arr = new Array(bufferSize);
var push = function (num) {
    if (writPointer == bufferSize) {
        writPointer = 0;
        readPointer++;
        if (readPointer == bufferSize)
            readPointer = 0;
    }
    if (writPointer == readPointer) {
        readPointer++;
        if (readPointer == bufferSize)
            readPointer = 0;
    }
    arr[writPointer] = num;
    writPointer++;
    console.log("writPointer: ", writPointer, "input: ", num);
    console.log(arr);
};
exports.push = push;
var get = function () {
    return arr[readPointer];
};
exports.get = get;
