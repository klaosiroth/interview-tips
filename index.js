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

/**
 * Front End Interview Questions: Destructing Objects and Arrays
 *
 * Q: What is and why might you destructure an object or array?
 */

const dob = [10, 25, 1987];
const [day, month, year] = dob;

const user = {
  f: 'Dylan',
  l: 'Israel',
};

const { f: firstName, l: lastName } = user;

/**
 * Front End Interview Questions: Git Fundamentals
 *
 * Q: What is Git? Why do you use it? What are some common commands you use?
 * Bonus Resource: https://try.github.io/
 */

// branch
// stage / add
// commit -m
// pull
// push

/**
 * Front End Interview Questions: Agile & Scrum
 *
 * Q: What is Agile? What is Scrum?
 *
 * Bonus Resource: https://scrumguides.org/
 */

/**
 * Front End Interview Questions: Number Issues
 *
 * Q: What are some issues with numbers in JavaScript you may have to protect against?
 */

console.log(0.2 + 0.1);

/**
 * Front End Interview Questions: Promises
 *
 * Q: What are Promises and why might you use them?
 *
 * Bonus Resource: https://jsonplaceholder.typicode.com/
 */

// function getPost() {
//   console.log(1);

//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((data) => data.json())
//     .then((json) => console.log(2))
//     .catch((error) => console.log(e));

//   console.log(3);
// }

// getPost();

async function getPost() {
  console.log(1);

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e);
  }

  // fetch('https://jsonplaceholder.typicode.com/posts/1')
  // .then((data) => data.json())
  // .then((json) => console.log(2))
  // .catch((error) =>  console.log(e));

  console.log(3);
}

getPost();

/**
 * Front End Interview Questions: Pass by Value vs Pass by Reference
 *
 * Q: What is pass by reference and how does it differ from pass by value?
 */

const prim = 5;

function add(value) {
  value++;

  return value;
}

console.log(add(prim), prim);

const ref = { count: 5 };

function add2(value) {
  value.count++;

  return value.count;
}

console.log(add2(ref), ref.count);
