function primeFinder(n) {
  return [...Array(n+1).keys()].slice(2).filter(isPrime)
}

function isPrime(x) {
  const l = [...Array(x).keys()].slice(2).filter(n => x%n === 0).length
  return l===0
}

console.log(primeFinder(11))

// Leave this so we can test your code:
module.exports = primeFinder;
