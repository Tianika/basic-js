import { NotImplementedError } from '../extensions/index.js'

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let names = []
  let team = ''

  if (Array.isArray(members)) {
    members = members.forEach((name) => {
      if (typeof name === 'string') {
        let x = name
        x = x.trim()
        names.push(x[0])
      }
    })
  }

  team = names
    .map((n) => n.toUpperCase())
    .sort()
    .join('')
  return team
}
