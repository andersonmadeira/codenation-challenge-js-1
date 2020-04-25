const { expect } = require('chai')
const { fibonacci, isFibonnaci } = require('../src')

describe('fibonacci', () => {
  it('should return an array', () => {
    const result = fibonacci()
    expect(result).to.be.a('array')
  })
  it('should start with 0', () => {
    const result = fibonacci()
    expect(result[0]).equals(0)
  })
  it('should end with 377', () => {
    const result = fibonacci()
    expect(result[result.length - 1]).equals(377)
  })
  it('should be a valid fibonacci sequence', () => {
    const result = fibonacci()
    const isFibonacciSequence = result.every((e, i, a) =>
      i <= 1 ? e === i : e === a[i - 1] + a[i - 2]
    )
    expect(isFibonacciSequence).to.be.true
  })
})

describe('isFibonacci', () => {
  it('should return true when the number is a fibonacci', () => {
    const result = isFibonnaci(5)
    expect(result).to.be.true
  })

  it("should return false when the number isn't a fibonacci", () => {
    const result = isFibonnaci(4)
    expect(result).to.be.false
  })
})
