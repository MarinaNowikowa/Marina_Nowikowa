// Домашнее задание №1
const number = 3;
const value = "a";

const fill = (number, value) => {
  return Array((Array.length = number)).fill(value);
};
console.log(fill(number, value));

// Домашнее задание №2

const data = [0, 1, false, 2, undefined, "", 3, null];

const compact = (array) => {
  return array.filter(Boolean);
};

console.log(compact(data)); // [1, 2, 3]

// Домашнее задание №3

// **  Так же подзадача, представим, что числа это оценки за
// успеваемость от 1 до 10, вывести массив с объектами, с полями
// (фамилия, оценка, успеваемость(двоешник, хорошист, отличник -
//     градация на ваше усмотрение))

let usersAge = {
  ivanov: "19",
  petrov: "17",
  sidorov: "21",
};

let ageArr = Object.entries(usersAge);
let arrAdult = [];
let arrChild = [];

ageArr.forEach(([key, value]) => {
  let user = {
    name: key,
    age: value,
  };

  if (value >= 18) {
    arrAdult.push(user);
  }

  if (value < 18) {
    arrChild.push(user);
  }
});

console.log(arrAdult);
console.log(arrChild);

// Подзадача задачи №3

// let usersNotes = {
//   ivanov: "10",
//   petrov: "2",
//   sidorov: "7",
// };

// let notesArr = Object.entries(usersNotes);
// let arrResult = [];

// notesArr.forEach(([key, value, string]) => {
//   let user = {
//     name: key,
//     notes: value,
//     result: string,
//   };

//   if (value >= 9) {
//     break;
//     string = "Отличник";
//     arrResult.push(user);
//   }

//   if (value >= 6) {
//     break;
//     string = "Хорошист";
//     arrResult.push(user);
//   }

//   if (value >= 4) {
//     string = "Двоечник";
//     arrResult.push(user);
//   }
// });
// console.log(arrResult);
