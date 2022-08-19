const { palindrome } = require('../utils/palindrome')

describe('Palindrome', () => {
  test('of brian is nairb', () => {
    const result = palindrome('brian')
    expect(result).toBe('nairb')
  })

  test('of empty string is empty string', () => {
    const result = palindrome('')
    expect(result).toBe('')
  })

  test('undefined throw type error', () => {
    const fn = () => {
      palindrome()
    }
    expect(fn).toThrowError(TypeError)
    expect(fn).toThrowError(
      'Palindrome function expects a string but got undefined'
    )
  })

  test('number throw type error', () => {
    const fn = () => {
      palindrome(1)
    }
    expect(fn).toThrowError(TypeError)
    expect(fn).toThrowError(
      'Palindrome function expects a string but got number'
    )
  })
})
