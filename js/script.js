// Task 1

const complexFunction = function(arg1, arg2) {
  return arg1 + arg2;
};

function cache(fn) {
  const cacheArgs = {};
  return (...args) => {
    const arg1 = args[0];
    const arg2 = args[1];

    return args in cacheArgs
      ? 'Fetching from cache: ' + cacheArgs[args]
      : 'Calculating result: ' + (cacheArgs[args] = fn(arg1, arg2));
  };
}

const cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar');
cachedFunction('foo', 'bar');
cachedFunction('foo', 'baz');


// Task 2

const ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().up().showStep();


// Task 3

// ES6 solution:
const sum = (...args) => args.reduce((a, b) => a + b);
const applyAll = (fn, ...rest) => fn.call(this, ...rest);
applyAll(sum, 2, 3);

// ES5 solution:
function sum1() {
  return Array.prototype.reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function applyAll1(func) {
  return func.apply(this, Array.prototype.slice.call(arguments, 1));
}
applyAll1(sum, 2, 3);
