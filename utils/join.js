const join = (arr1, arr2, prop) => {
  const result = []
  for (const element of arr1) {
    const relationedItem = arr2.find((elm) => elm.id === element[prop])
    if (!relationedItem) result.push({ ...element })
    if (relationedItem)
      result.push({ ...element, [prop]: { ...relationedItem } })
  }
  return result
}

module.exports = { join }
