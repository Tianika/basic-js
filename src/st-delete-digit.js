import { NotImplementedError } from '../extensions/index.js'

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

//npm run test ./ test/st-delete-digit.test.js
export default function deleteDigit(n) {
  let max = 0
  n = String(n)
  for (let i = 0; i < n.length; i++) {
    let arr = [...n]
    arr.splice(i, 1)
    let x = Number(arr.join(''))
    if (x > max) {
      max = x
    }
  }
  return max
}
