function wordReverser(phrase) {
  return phrase.split(/\s/).reverse().join(' ')
}

console.log(wordReverser("Codecademy rules"));

// Leave this so we can test your code:
module.exports = wordReverser;
