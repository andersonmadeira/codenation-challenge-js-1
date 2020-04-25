'use strict'

const fibonacci = (arr = [0, 1]) =>
  arr[arr.length - 1] >= 350
    ? arr
    : fibonacci([...arr, arr[arr.length - 2] + arr[arr.length - 1]])

const isFibonnaci = (num) => fibonacci().includes(num)

module.exports = {
  fibonacci,
  isFibonnaci,
}
