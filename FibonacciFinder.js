function fibFinder(n) {
  return n===0 ? 0 : getFibo(0, 1, n)
}

function getFibo(f0, f1, n){
  for(let i=1; i < n; i++){
    f0 = [f1, f1+=f0][0] //swap vars
  }
  return f1
}

console.log(fibFinder(6))

// Leave this so that we can test your code:
module.exports = fibFinder;
