import { NotImplementedError } from '../extensions/index.js'

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

//npm run test ./ test/st-file-names.test.js
export default function renameFiles(names) {
  let result = []
  let count = 0
  let gcount = 0

  for (let i = 0; i < names.length; i++) {
    let file = names[i]
    if (!result.includes(file)) {
      result.push(file)
    } else {
      count = 1
      gcount = 1
      while (count !== 0) {
        if (!result.includes(`${file}(${count})`)) {
          result.push(`${file}(${count})`)
          count = 0
          gcount = 0
        } else if (!result.includes(`${file}(${count})(${gcount})`)) {
          result.push(`${file}(${count})(${gcount})`)
          count = 0
          gcount = 0
        } else {
          count++
        }
      }
    }
  }

  console.log(result)

  return result
}
