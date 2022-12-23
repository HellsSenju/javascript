"use strict";

var array = [1, 4, 7, 2, 4, 8, 9, 6, 5, 4, 9, 14];

function linearSearch(array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == item) return i;
  }

  return null;
}

console.log(linearSearch(array, 11));