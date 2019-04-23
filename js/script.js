// Task 1

function getCookingTime(eggsAmount) {
  let result;
  const cookingTime = 5;

  if (
    (typeof eggsAmount !== 'number')
    || (eggsAmount.isNaN)
    || (eggsAmount < 0)
  ) {
    result = 'Incorrect input data';
  }

  for (let i = 0; i <= eggsAmount; i++) {
    if (eggsAmount === 0) {
      result = `${0} minutes`;
    } else {
      result = `${Math.ceil(eggsAmount / 5) * cookingTime} minutes`;
    }
  }

  return result;
}

getCookingTime('3');
getCookingTime(5);
getCookingTime(9);
getCookingTime(3);
getCookingTime(22);

// Task2

function getNumber(array) {
  const even = array.filter((elem) => elem % 2 === 0);
  const odd = array.filter((elem) => elem % 2 !== 0);
  const result = even.length === 1 ? even[0] : odd[0];

  return result;
}

getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]);
getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]);

// Task 3

function findTitle(arr, str) {
  return Array.isArray(arr)
    ? arr.filter(({title}) => (title || '').toUpperCase().includes(str.toUpperCase()))
    : 'Incorrect input data';
}

const arr1 = [{
  title: 'Some title1',
}, {
  title: 'I like JS',
}, {
  user: 'This obj doesn\'t have key title js',
}, {
  title: 'Js - is the best!',
},
];

findTitle(arr1, 'JS');

// Task 4.1

function countCharacters(string) {
  const result = {};

  if (typeof string !== 'string' || !string || string.length === 0) {
    return 'Incorrect input data';
  }

  for (let i = 0; i < string.length; i++) {
    if (
      (string[i].charCodeAt(0) >= 97 && string[i].charCodeAt(0) <= 122)
      || (string[i].charCodeAt(0) >= 65 && string[i].charCodeAt(0) <= 90)
      || (string[i].charCodeAt(0) >= 48 && string[i].charCodeAt(0) <= 57)
    ) {
      result[string[i]] = ++result[string[i]] || 1;
    }
  }

  return result;
}

countCharacters('Sparrow');
countCharacters('aabcddeffge');
countCharacters('a 2ab !d');
countCharacters('');
countCharacters(77);

// Task 4.2(*)

function getNextPalindrome(number) {
  let result;
  const numbers = number.toString().split('');
  const num = Math.floor(numbers.length / 2);
  let firstHalf = numbers.slice(0, -num);
  let secondHalf = firstHalf.slice(0, num).reverse();

  if (result > number) {
    return result;
  }

  if (number <= 10) {
    return 11;
  }

  result = parseInt(firstHalf.concat(secondHalf).join(''));
  const headNum = parseInt(firstHalf.join('')) + 1;
  firstHalf = headNum.toString().split('');
  secondHalf = firstHalf.slice(0, num).reverse();
  result = parseInt(firstHalf.concat(secondHalf).join(''));

  return result;
}

getNextPalindrome(10);
getNextPalindrome(11);
getNextPalindrome(150);
getNextPalindrome(68423);
getNextPalindrome(5);
