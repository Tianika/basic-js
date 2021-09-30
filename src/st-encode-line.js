import { NotImplementedError } from '../extensions/index.js'

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

//npm run test ./ test/st-encode-line.test.js
export default function encodeLine(str) {
  let result = ''
  let count = 0
  for (let i = 0; i < str.length; i++) {
    let l = str[i]
    count++
    if (l !== str[i + 1]) {
      result += count > 1 ? `${count}${l}` : `${l}`
      count = 0
    }
  }

  return result
}
