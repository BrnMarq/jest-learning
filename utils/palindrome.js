const palindrome = (string) => {
  if (typeof string !== 'string')
    throw new TypeError(
      `Palindrome function expects a string but got ${typeof string}`
    )
  return string.split('').reverse().join('')
}

module.exports = { palindrome }
