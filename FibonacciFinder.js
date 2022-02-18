function fibFinder(n) {
  let fibo0 = 0, fibo1 = 1

  if (n === 0) { return fibo0 }
  if (n === 1) { return fibo1 }

  for(let i=1; i < n; i++){
    const temp = fibo1
    fibo1 += fibo0
    fibo0 = temp 
  }

  return fibo1
}

console.log(fibFinder(6))

// Leave this so that we can test your code:
module.exports = fibFinder;
