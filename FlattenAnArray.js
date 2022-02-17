function flattenArray(array) {
  //return array.flat()
  return array.reduce((acc, i) => acc.concat(i), [])
}

console.log(flattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9]))

// Leave this so we can test your code:
module.exports = flattenArray;
