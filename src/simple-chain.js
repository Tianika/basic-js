import { NotImplementedError } from '../extensions/index.js'

// npm run test ./ test/simple-chain.test.js
export default {
  arr: [],

  getLength() {
    let l = this.arr.length
    return l
  },
  addLink(value) {
    this.arr.push(`~~( ${value} )`)
    console.log(this.arr)
    return this.arr
  },
  removeLink(position) {
    this.arr = this.arr.splice(position - 1, 1)
    return this.arr
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this.arr
  },
  finishChain() {
    if (this.arr.length > 0) {
      this.arr = []
    } else {
      throw new NotImplementedError(`You can't remove incorrect link!`)
    }
    return this
  },
}
