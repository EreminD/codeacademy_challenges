function uniqueCharacters(stringIn) {
  if(!stringIn) {
    return 'empty string'
  }
  
  const arr = Array.from(stringIn).filter((l, i, arr) => arr.indexOf(l) !== arr.lastIndexOf(l))
 
  return !arr.length
}

// Leave this so we can test your code:
module.exports = uniqueCharacters;
