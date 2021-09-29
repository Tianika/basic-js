import { NotImplementedError } from '../extensions/index.js'

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

// npm run test ./ test/st-common-character-count.test.js
export default function getCommonCharacterCount(s1, s2) {
  let count = 0
  let arr1 = [...s1]
  let arr2 = [...s2]
  arr2.forEach((element, index, arr) => {
    if (arr1.includes(element)) {
      count++
      arr1.splice(arr1.indexOf(element), 1)
    }
  })

  return count
}
