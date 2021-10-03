import { NotImplementedError } from '../extensions/index.js'

// npm run test ./ test/simple-chain.test.js
export default {
  arr: [],

  getLength() {
    let l = this.arr.length()
    return l
  },
  addLink(value) {
    if (arguments.length) {
      this.arr.push(`( ${String(value)} )`)
    } else {
      this.arr.push(`(  )`)
    }
    console.log('add', this.arr)
    return this
  },
  removeLink(position) {
    if (typeof position === 'number' && position < this.arr.length) {
      this.arr.splice(position - 1, 1)
    } else {
      throw new Error(`You can't remove incorrect link!`)
    }
    return this
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    console.log('reverse', this.arr)
    return this
  },
  finishChain() {
    let x = this.arr.join('~~')

    this.arr = []

    return x
  },
}
