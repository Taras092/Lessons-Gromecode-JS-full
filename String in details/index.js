///     Разбить текст на строки
// const splitText = (text, len) => {
//   if (!typeof text) {
//     return null;
//   }
//   const strArr = [];
//   let startPositin = 0;
//   while (true) {
//     let chunk = text.substr(startPositin, len);
//     if (chunk.length === 0) {
//       break;
//     }
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPositin += len;
//   }
//   return strArr.join("\n");
// };

// console.log(splitText("abcdefghklomnp", 4));
///                                    /////////////

///
const sortContacts = (users, bool = true) => {
  if (!Array.isArray(users)) {
    return null;
  }
  const result = users.sort((a, b) => {
    if (bool) {
      return b.name.localeCompare(a.name);
    }
    return a.name.localeCompare(b.name);
  });
  return result;
};
const getContacts = () => [
  {
    name: "Taras",
    phoneNumber: "777-77-77",
  },
  {
    name: "Ivan",
    phoneNumber: "777-77-77",
  },
  {
    name: "Christina",
    phoneNumber: "777-77-77",
  },
  {
    name: "Olena",
    phoneNumber: "777-77-77",
  },
  {
    name: "Nastia",
    phoneNumber: "777-77-77",
  },
];
console.log(sortContacts(getContacts(), true));
console.log(sortContacts(getContacts(), false));
console.log(sortContacts(getContacts()));
///           ///////////////////////////////////

///
const splitString = (text, len = 10) => {
  if (typeof text !== "string") {
    return null;
  }
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    } else if (chunk.length < len) {
      // chunk = chunk + new Array(len - chunk.length)
      // .fill('.')
      // .join('');
      chunk = chunk.padEnd(len, ".");
    }
    strArr.push(chunk);
    startPosition += len;
  }
  return strArr;
};
console.log(splitString("abcdefghklomnp....", 4));
// console.log(splitString("abcdefghklomnp....",));
///          ///////////////////////////////

///  ділить текст по входженій стрічці /////////////////////////////////
const countOccurrences = (text = "", str) => {
  if (!str) {
    return null;
  }
  return text.split(str).length - 1;
};
///       ///////////////////////////////

///   calculator //////////////
const calc = (expression) => {
  const [a, operator, b] = expression.split(" ");
  let result = 0;
  switch (operator) {
    case "+":
      result = Number(a) + Number(b);
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "*":
      result = a * b;
      break;
  }
  return `${expression} = ${result}`;
};

console.log(calc("2 + 2"));
console.log(calc("5 - 4"));
console.log(calc("12 / 2"));
console.log(calc("2 * 2"));
///           ////////////////////////////

///   Revers string //////////////////
/// 111
const reverseString = str => {
  if (typeof str !== 'string') {
      return null;
  }
  let revers = '';
  for (let i = str.length; i >= 0; i--) {
    revers += str.charAt(i);
  }
  return revers;
}
/// 222
const reverseString1 = str => {
  if (typeof str !== 'string') {
    return null;
  }
    const arr = str.split('')
    .reverse()
    .join('');
  return arr;
}

console.log(reverseString('abcdefg'));
console.log(reverseString1('abcdefg'));
///                  /////////////////////////////

/// Очистка данных о транзакциях   //////////////////
const cleanTransactionsList = arr => {
    let array= [];
    for (let i = 0; i < arr.length; i++) {
      if (Number(arr[i])) {
        array.push('$' + Number(arr[i]).toFixed(2));
      }
    }
    return array;
}

console.log(cleanTransactionsList([' 1.9', '16.4', 17, ' 1 dollar ']));
///          //////////////////////////