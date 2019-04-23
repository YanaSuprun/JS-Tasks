// Task1
function validateTitle(value) {
  const allowedSymbols = [' ', '!', ':', '-', '?', '.', ','];
  if (typeof value != 'string') {
    return 'Incorrect input data';
  }
  if (value.length < 2 && value.length > 20) {
    return 'INVALID';
  }
  if (value[0] !== value[0].toUpperCase()
    || value[0] === value[0].toLocaleLowerCase()) {
    return 'INVALID';
  }
  for (let i = 0; i < value.length; i++) {
    const upperLetter = value[i].charCodeAt() >= 65 && value[i].charCodeAt() <= 90;
    const lowerLeter = value[i].charCodeAt() >= 97 && value[i].charCodeAt() <= 122;
    if (!(lowerLeter || upperLetter)) {
      const symbols = allowedSymbols.some((item) => item === value[i]);
      if (!symbols) {
        return 'INVALID';
      }
    }
  };

  return 'VALID';
};

validateTitle('Title!');


// Task2
function sum(value1, value2) {
  const array = [value1, value2].map((item) => {
    if ((typeof item === 'number') && (item % 15 === 0)) {
      return item * -1;
    } else {
      return Number(item);
    }
  });

  return (array[0] + array[1]);
};

sum('25', 30);


// Task3
function checkNumber(num) {
  if (isNaN(num) || !isFinite(num)) {
    return 'Incorrect input data';
  };

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };
  const isEven = (num) => num % 2 === 0;
  const isMultipleOfTen = (num) => num % 10 === 0;

  return [isPrime(num), isEven(num), isMultipleOfTen(num)];
};

checkNumber(7);
checkNumber(10);
