import { NotImplementedError } from '../extensions/index.js'

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */

//npm run test ./ test/transform-array.test.js
export default function transform(arr) {
  let x = []

  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }

  let y = ['--double-next', '--double-prev', '--discard-next', '--discard-prev']

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--double-next' && i < arr.length - 1) {
      x.push(arr[i + 1])
    }
    if (arr[i] === '--double-prev' && x.length > 0) {
      x.push(x[x.length - 1])
    }
    if (arr[i] === '--discard-next' && i < arr.length - 1) {
      i++
    }
    if (arr[i] === '--discard-prev' && x.length > 0) {
      x.pop()
    }

    if (!y.includes(arr[i])) {
      x.push(arr[i])
    }
  }

  console.log(x)
  return x
}
