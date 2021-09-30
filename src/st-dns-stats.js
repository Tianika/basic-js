import { NotImplementedError } from '../extensions/index.js'

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

//npm run test ./ test/st-dns-stats.test.js
export default function getDNSStats(domains) {
  let dom = {}

  domains.forEach((el) => {
    let arr = el.split('.').reverse()
    for (let i = 1; i < arr.length + 1; i++) {
      let clone = arr.slice(0)
      let x = clone.splice(0, i)
      let t = `.${x.join('.')}`
      if (dom.hasOwnProperty(t)) {
        dom[t] += 1
      } else {
        dom[t] = 1
      }
    }
  })

  return dom
}
