/**
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce|MDN Array.prototype.reduce}.
 */

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce((acc, curr) => acc + curr, initialValue);

console.log(sumWithInitial);
// Expected output: 10
