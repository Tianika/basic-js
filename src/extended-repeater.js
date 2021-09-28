import { NotImplementedError } from '../extensions/index.js'

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  // npm run test ./ test/extended-repeater.test.js
  let add = options

  add.str = String(add.str)
  add.separator = String(add.separator)
  add.addition = String(add.addition)
  add.additionSeparator = String(add.additionSeparator)

  function addSeparator(str, repeat, separator) {
    let result = ''

    if (str === 'undefined') {
      return ''
    }
    if (repeat === 'undefined') {
      return str
    }

    let temp = new Array(repeat)
    temp = temp.fill(str, 0)
    result = temp.join(`${separator}`)

    return result
  }

  let result = ''
  let str1 =
    str +
    addSeparator(
      add.addition,
      add.additionRepeatTimes,
      add.additionSeparator === 'undefined' ? '|' : add.additionSeparator
    )

  result = addSeparator(
    str1,
    add.repeatTimes,
    add.separator === 'undefined' ? '+' : add.separator
  )
  return result
}
