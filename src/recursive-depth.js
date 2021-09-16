import { NotImplementedError } from '../extensions/index.js'

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    // npm run test ./ test/recursive-depth.test.js
    let count = 1
    let n = 1

    function counting(m) {
      for (let i = 0; i < m.length; i++) {
        if (Array.isArray(m[i])) {
          n++
          counting(m[i])
        }
        if (n > count) {
          count = n
          n = 1
        }
      }
    }

    counting(arr)
    return count
  }
}
