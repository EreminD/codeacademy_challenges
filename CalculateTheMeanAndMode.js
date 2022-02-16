function statsFinder(array) {
  // Write your code here
  const mean = getMean(array)
  const mode = getMode(array)

  return [mean, mode]
}

function getMean(arr) {
    return arr.reduce((acc, i) => (acc+i),0) / arr.length;
}

function getMode(arr) {
  const myMap = new Map()

  arr.forEach(x => {
    myMap.has(x)
      ? myMap.set(x, myMap.get(x)+1)
      : myMap.set(x, 1)
  })

  let max = 0, mode

  [...myMap]
    .reverse()
    .forEach(([key, val]) => {
      if (val >= max){
        max = val
        mode = key
      }
    });

  return mode
}

console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))

// Leave this so we can test your code:
module.exports = statsFinder;
