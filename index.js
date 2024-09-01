// function filter(arr, checkedFn) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (checkedFn(arr[i])) {
//       newArr.push(arr[i] +"");
//     }
//   }
//   return newArr;
// }

// let arr = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (num) {
//   return num % 2 === 0;
// });
// console.log(arr);

// function every(arr, checkedFn) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!checkedFn(arr[i], i, arr)) {
//       return false;
//     }
//   }
//   return true;
// }
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let allPositive = every(num, function(num) {return num > 0});
// console.log(allPositive);
