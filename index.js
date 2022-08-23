/**
 * Front End Interview Questions: Introduction
 *
 * 1. Lets review the question.
 * 2. Pause the screencast and spend 5 - 10 minutes researching an answer.
 * 3. Come back to my answer / solution.
 * 4. Review, record and repeat till you can confidently answer the question.
 */

/**
 * Front End Interview Questions: Falsy Values
 *
 * Q: What are falsey values in JavaScript?
 */

if (null) {
  console.log('null');
}

if (undefined) {
  console.log('undefined');
}

if (0) {
  console.log('0');
}

const arr = [];

if (arr.length > 0) {
  console.log('0');
}

if ('') {
  console.log('empty');
}

const word = '';

if (word.length > 0) {
  console.log('empty');
}

if (false) {
  console.log('false');
}

/**
 * Front End Interview Questions: const vs let vs var
 *
 * Q: What are the differences between const, let, and var?
 */

// var firstNameVar;

if (false) {
  let firstNameLet = 'Dylan';
  var firstNameVar = 'Dylan';
}

// console.log(firstNameVar);
// console.log(firstNameLet);

const PI = 3.14;
const user = {
  firstName: 'D-Money',
};
// PI = 3.145;
console.log(PI);
user.firstName = 'Dylan';

/**
 * Front End Interview Questions: == vs ===
 *
 * Q: How does == vs === differ?
 */

const value1 = 5;
const value2 = '5';

console.log(value1 == value2);
console.log(value1 === value2);

/**
 * Front End Interview Questions: map() vs filter() vs reduce()
 *
 * Q: What do map(), filter() and reduce() do?
 */

const nums = [1, 2, 3, 4, 5];

const numsAddOne = nums.map((value) => value + 1);
console.log(numsAddOne);

const evenNums = nums.filter((value) => value % 2 === 0);
console.log(evenNums);
console.log(nums);

const sum = nums.reduce((total, current) => {
  return total + current;
}, 0);

console.log(sum);

const numsAddOneEvens = nums.reduce((acc, current) => {
  current = current + 1;

  if (current % 2 === 0) {
    acc.push(current);
  }

  return acc;
}, []);

console.log(numsAddOneEvens);

/**
 * Front End Interview Questions: undefined vs null
 *
 * Q: What is the difference between undefined and null?
 */

const user = {
  firstName: null,
};

const user2 = {};

console.log(user.firstName);
console.log(user2.firstName);

/**
 * Front End Interview Questions: Data Types
 *
 * Q: What are some JavaScript data types?
 */

// boolean, strings, numbers, BigInt, Symbol
// [], {}, Map, Set

/**
 * Front End Interview Questions: Spread & Rest Operators
 *
 * Q: What do the spread and rest operators do?
 */

const users = ['Dylan', 'Per', 'Dollan'];
const allUsers = ['Olivia', ...users];
console.log(allUsers);

const user = { firstName: 'Dylan', lastName: 'Israel', channel: 'codingtutorials360' };
const defaults = { channel: 'scrimba', ...user };
console.log(defaults);

const { channel, ...remainder } = defaults;

console.log(remainder);

function addNums(...nums) {
  return nums.reduce((total, current) => {
    return total + current;
  }, 0);
}

console.log(addNums(1, 2, 3));
console.log(addNums(1, 2));
