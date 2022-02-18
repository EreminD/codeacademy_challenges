function missingNos(array, k) { // why k?
  const length = array[array.length-1]
  const fullArr = [...Array(length+1).keys()].slice(1)

  return fullArr.filter(x => !array.includes(x));
}

const testArray = [1, 2, 4, 5, 6, 7, 8, 10];
console.log(missingNos(testArray, 2));

// Leave this so we can test your code:
module.exports = missingNos;
