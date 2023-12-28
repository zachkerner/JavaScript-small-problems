// // function getSelectedColumns(numbers, cols) {
//   var result = [];

//   for (var i = 0, length = cols.length; i < length; i += 1) {
//     for (var j = 0, length = numbers[i].length; j < length; j += 1) {
//       if (!result[j]) {
//         result[j] = [];
//       }

//       result[j][i] = numbers[i][cols[j]];
//     }
//   }

//   return result;
// }

// // given the following arrays of number arrays
// const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// // `array1` in row/column format
// // [[1, 2, 3],
// //  [4, 5, 6],
// //  [7, 8, 9]]

// console.log(getSelectedColumns(array1, [0])) 
// console.log(getSelectedColumns(array1, [0, 2]))  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
// console.log(getSelectedColumns(array2, [1, 2]))  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]


// var counter = 5;
// var rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

function invoiceTotal(...args) {
  let sum = 0
  for (let i = 0; i < args.length; i ++){
    sum += args[i]
  }
  return sum
}


// let startingBalance = 1;
// const chicken = 5;
// const chickenQuantity = 7;

// function totalPayable(item, quantity) {
//   return startingBalance + (item * quantity);
// }

// startingBalance = 5;
// console.log(totalPayable(chicken, chickenQuantity));

// startingBalance = 10;
// console.log(totalPayable(chicken, chickenQuantity));

console.log(0.1 + 0.2)