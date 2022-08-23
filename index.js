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
