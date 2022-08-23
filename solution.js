// Solution: Pangram check function
const abc = 'abcdefghijklmnopqrstuvwxyz';

const isPangram = (string) => {
  // const processedString = [...new Set(string.toLowerCase().split(' ').join(''))].sort().join('')
  const regexMatch = new Set(string.toLowerCase().match(/[a-z]/gi));
  return regexMatch.size === 26;
};

console.log(isPangram('The quick Brown fox jumps over the lazy DOG'));
console.log(isPangram('abcdefghijklmnopqrstuvwxyz'));
console.log(isPangram('abcdefghpqrstuvwxyz'));

// Solution: API array methods
const getUsers = async () => {
  const api = 'https://jsonplaceholder.typicode.com/users';
  const response = await fetch(api);
  const json = await response.json();

  const result = json
    .filter((v) => v.name.toLowerCase().includes('k'))
    .map(({ name, email }) => ({ name, email }));

  return result;
};

(async function () {
  try {
    console.log(await getUsers());
  } catch (err) {
    console.log(err);
  }
})();

// Solution: Rain language translator
const toRainLanguage = (number) => {
  let result = '';
  if (number % 3 === 0) result += 'Pling';
  if (number % 5 === 0) result += 'Plang';
  if (number % 7 === 0) result += 'Plong';

  return result || number;
};

console.log(toRainLanguage(3));
console.log(toRainLanguage(21));
console.log(toRainLanguage(35));
console.log(toRainLanguage(1));

// Solution: Write isogram check function
const isIsogram = (string) => {
  const lowerCased = string.toLowerCase();

  const result = lowerCased
    .split('')
    .every((v, i) => console.log(v, i) || lowerCased.indexOf(v) === i);

  return result;
};

console.log(isIsogram('ambidExtRously')); // true
console.log(isIsogram('patteRN')); // false

const isLeapYear = (year) => {
  const numberYear = Number(year);
  return numberYear % 100 === 0 ? numberYear % 400 === 0 : numberYear % 4 === 0;
};

// Solution: Write leap year check function
console.log(isLeapYear('2020')); // true
console.log(isLeapYear('2018')); // false
console.log(isLeapYear('1700')); // false
console.log(isLeapYear('1600')); // true

// Solution: Write run length encoding/decoding function
const encode = (string) => {
  return string.replace(/(\w)\1+/g, (m, v) => `${m.length}${v}`);
};

const decode = (string) => {
  return string.replace(/(\d+)(\w)/g, (x, y, z) => z.repeat(y));
};

console.log(encode('wwwwwwwwiiuuuu')); // 3w2i4u
console.log(decode('111u3a4o')); // uuaaaoooo

// Solution: Remove duplicates from array with reduce()
const removeDuplicateValues = (array) => {
  return array.reduce((accumulator, value) => {
    return accumulator.includes(value) ? accumulator : [...accumulator, value];
  }, []);
};

console.log(removeDuplicateValues(['one', 'two', 'one', 'three', 'three', 'two'])); // ['one','two','three']

// Solution: Implement array map with reduce()
const map = (array, callback) => {
  return array.reduce((accumulator, value) => {
    return [...accumulator, callback(value)];
  }, []);
};

console.log(map([1, 2, 3], (v) => v * v)); // [2,3,4]

// Solution: Flatten array with reduce()
const makeFlat = (array) => {
  return array.reduce((accumulator, value) => {
    return Array.isArray(value) ? [...accumulator, ...makeFlat(value)] : [...accumulator, value];
  }, []);
};

console.log(makeFlat(['one', ['two', 'three'], ['four', ['five']]])); // ['one','two','three','four','five']

// Solution: Transpose matrix
const transposeMatrix = (array) => {
  return array[0].map((_, i) => array.map((v) => v[i]));
};

console.log(
  transposeMatrix([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
);
// [[1,1,1],[2,2,2],[3,3,3]]
