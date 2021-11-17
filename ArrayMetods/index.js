/// //////////////////  filter Array /////////////////////////////////////
/// 1111
// const getSpecialNumbers = numbers => {
//   let arrSpecialNumber = [];

//   numbers.forEach(element => {
//     if (element % 3 === 0) {
//       arrSpecialNumber.push(element);
//     }
//   });

//   return arrSpecialNumber;
// }

// const arr = [1, 2, 4, 6, 9, 3, 15];

// console.log(getSpecialNumbers(arr));

/// 2222

// const getSpecialNumbers = numbers =>
//   numbers.filter(num => num % 3 === 0);

//   const arr = [1, 2, 4, 6, 9, 3, 15];

//   console.log(getSpecialNumbers(arr));
//   console.log(arr);

/// ////////////////////////////  sort Array   ////////////////////

//   const sortDesc = numbers =>
//     numbers.slice().sort((a, b)=> b - a);

// console.log(sortDesc([1, 2, 4, 6, 9, 3, 15])) ;

/// /////////////////////////

// const sortIncl = numbers =>
//     numbers.slice().sort((a, b)=> a - b);

// console.log(sortDesc([1, 2, 4, 6, 9, 3, 15])) ;

/// ////////////////////////////

/// metod concat and sort /////////////

// const flatArray = arr => {
//   const flatArray = arr
//   .reduce((acc, elem) => {
//       return acc.concat(elem);
//   }, []);
//   return flatArray.sort((a, b) => a - b)

// };

// const arr = [3, [2, 1, 6], 9, [4], 15];
// console.log(flatArray(arr)) ;
// console.log(arr);

/// ///////////////////

/// metods filter and map /////////////////

// const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {

//   const passedStudents = allStudentsList
//        .filter(name => !studentsForRetake.includes(name))

//    return passedStudents
//        .map(name => 'Good job, ' + name);
// ;

// }
// //example 1:

// //input:
// const allStud = ['a', 'b', 'c', 'd'];
// const retakeStud = ['b', 'd'];

// console.log(getMessagesForBestStudents(allStud, retakeStud));

// output:
// ['Good job, a', 'Good job, c']

/// ////////////////////////////////////////

/// ////////////////////////////////////////   element in Qvadrat

// function squareArray(numbers) {

//   if (!Array.isArray(numbers)) {
//       return null;
//   }

//   let newSquareArray = [];

//   numbers.forEach(elem => newSquareArray.push(elem*elem));

//   return newSquareArray;

// }

/// 2222
// function squareArray(numbers) {

//   if (!Array.isArray(numbers)) {
//       return null;
//   }

//   return numbers.slice().map(num => num ** 2);

// }

// console.log(squareArray([1, 2, 4, 6, 9, 3, 15])) ;
// console.log(squareArray(1, 2, 4, 6, 9, 3, 15)) ;

/// /////////////////////////    Metods reverse //////////////////////

// function reverseArray(numbers) {
//   if (!Array.isArray(numbers)) {
//      return null;
//   }
//   return numbers.slice().reverse();
// }

// const arr = [1, 2, 4, 6, 9, 3, 15];
// console.log(reverseArray(arr));
// console.log(arr)

/// ///////////////////////

/// //////////////////

// function increaseEvenEl(arr, delta) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   let eventEl = [];
//   arr.map(elem => {
//       if (elem % 2 === 0){
//         eventEl.push(elem + delta);
//       } else {
//         eventEl.push(elem);
//       }
//   })

//   return eventEl;
// }

// console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4] ,20));

// ////////////////

// const withdraw = (clients, balances, client, amount) => {

//   const index = clients.indexOf(client);
//   const balance = balances[index];
//   if (balance > amount) {
//     const rest = balance - amount;
//     balances[index] = rest;
//     return rest;
//   }
//   return -1;
// }

// //example 1:
// //input
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
// //output
// //37
// //и массив balances должен быть [1400, 37, -6]

// //example 2:
// //input
// console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
//output
//-1
//и массив balances должен быть [1400, 87, -6]

/// /////////////  Вивести слова які містять строчку text     ///////////////
// function filterNames(arr, text) {

//   return arr.filter(name => name.includes(text) && name.length > 5);

// }

// console.log(filterNames(['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'], 'ya'));
/// ///////////////////////////////

/// ////////////////  середнє арифметичне          //////////////////

// function arrAverage(arr) {
//   if (!Array.isArray(arr)) {
//       return null;
//   }

//   const averegEl = arr.reduce((acc, el) => {
//       return acc + el;
//   }, 0)

//   return averegEl / arr.length;
// }

// console.log(arrAverage([2, 5, 6, 3]));
/// //////////////////////////////////////////////////////////////

/// ////////////// Calculator  //////////
// const calc = (expression) => {
//   if (typeof expression !== "string") {
//     return null;
//   }

//   const [a, operation, b] = expression.split(" ");
//   let result;

//   switch (operation) {
//     case "+":
//       result = +a + +b;
//       break;
//     case "-":
//       result = +a - +b;
//       break;
//     case "*":
//       result = +a * +b;
//       break;
//     case "/":
//       result = +a / +b;
//       break;
//   }

//   return `${expression} = ${result}`;
// };

// console.log(calc('2 + 3'));

/// //////////////////////
