const { join } = require('../utils/join')

const categories = [{ id: 1, name: 'Entertainment', color: 1 }]
const colors = [{ id: 1, name: 'red', hex: '#ff0000' }]

describe('Join', () => {
  test('of categories and colors joins its props', () => {
    const result = join(categories, colors, 'color')
    expect(result).toStrictEqual([{ ...categories[0], color: colors[0] }])
  })

  test('of categories and array objects that has id but no matching prop', () => {
    const result = join(categories, [{ id: 2 }], 'color')
    expect(result).toStrictEqual(categories)
  })

  test('of categories and array of objects that has no id and no matching prop', () => {
    const result = join(categories, [{ pk: 2 }], 'color')
    expect(result).toStrictEqual(categories)
  })

  test('of array of objects with no passed prop and colors', () => {
    const result = join([], colors, 'color')
    expect(result).toStrictEqual([])
  })
})
