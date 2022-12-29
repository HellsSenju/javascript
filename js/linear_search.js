
const array = [1,4,7,2,4,8,9,6,5,4,9,14];
let count = 0;

function linearSearch(array, item){
    for(let i = 0; i < array.length; i++){
        count++;
        if(array[i] === item) return i;
    }
    return null;
}

console.log(linearSearch(array,9));
console.log('count = ', count);
