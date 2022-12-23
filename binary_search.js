"use strict"

const array = [1,767,34,36,8,5,3,6658,5,46,478,45,63,23,3];
let count = 0;

function BinarySearch(array, item){
    let start = 0;
    let end = array.length - 1;
    let middle;
    let found;
    let position = -1;
    while(found == false && start <= end){
        middle = Math.floor((end - start) / 2);
        if(array[middle] == item){
            found = true;
            position = middle;
            return position;
        }
        if(item < array[middle]){
            end = middle - 1;
        }else start = middle + 1;
    }
    return null;
}

console.log(BinarySearch(array, 5));