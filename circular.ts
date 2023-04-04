let bufferSize: number = 5;
let writPointer: number = 0;
let readPointer: number = 0;
let arr: number[] = new Array<number>(bufferSize);

export const push = (num: number) => {
    if (writPointer == bufferSize) {
        writPointer = 0;
        readPointer++;
        if (readPointer == bufferSize) readPointer = 0
    }


    if (writPointer == readPointer) {
        readPointer++;
        if (readPointer == bufferSize) readPointer = 0
    }

    arr[writPointer] = num;
    writPointer++;

    console.log("writPointer: ", writPointer, "input: ", num);
    console.log(arr);
}

export const get = () => {
    return arr[readPointer];
}