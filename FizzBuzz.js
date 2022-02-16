function fizzbuzz(n) {
  // Write your code here
  const arr = [...Array(n+1).keys()].slice(1)
  
  arr.forEach((x,i) => {
    if (x % 3 === 0) {
      arr[i] = 'Fizz'
    }

    if (x % 5 === 0) {
      isNaN(arr[i]) ? arr[i]+='Buzz' : arr[i]='Buzz'
    }
  })

  return arr;
}

console.log(fizzbuzz(16));

// Leave this line for testing:
module.exports = fizzbuzz;
