# codeacademy_challenges

[Code Challenges](https://www.codecademy.com/code-challenges)


1. [Calculate the Mean and Mode](https://github.com/EreminD/codeacademy_challenges/blob/main/CalculateTheMeanAndMode.js)
> Create a statsFinder() function that takes in a list of numbers and returns a list containing the mean and mode, in that order. As a reminder, the mean is the average of the values and the mode is the most occurring value. If there are multiple modes, return the mode that occurs first. Make sure that you write your functions and find these answers from scratch – don’t use imported tools!
> 
> For example, statsFinder([500, 400, 400, 375, 300, 350, 325, 300]) should return [368.75, 400].
2. [FizzBuzz](https://github.com/EreminD/codeacademy_challenges/blob/main/FizzBuzz.js)
> Write a fizzbuzz() function that takes in a number, n, and returns an array of the numbers from 1 to n. For multiples of three, use "Fizz" instead of the number, and for the multiples of five, use "Buzz". For numbers that are multiples of both three and five, use "FizzBuzz" (capitalization matters).
> 
> For example, fizzbuzz(16) should return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16].
3. [Maximize Stock Trading Profit](https://github.com/EreminD/codeacademy_challenges/blob/main/MaximizeStockTradingProfit.js)
> Given the daily values of a stock, create a function called maxProfitDays() that, given a list of integers, will return the index value of the two elements that represent the day on which one should have bought a share and the day on which one should have sold a share based on the max profit.
> A list of integers will represent the stock price at the beginning or “opening bell” of each day for a week. You are required to buy and sell only once. You also must buy a stock before selling it.
> 
> For example, given the list [17, 11, 60, 25, 150, 75, 31, 120], you can assume that index 0 represents day 0 and index 7 represents day 7. In this case, purchasing on day 1 and selling on day 4 would yield the most profit. If we were to call maxProfitDays([17, 11, 60, 25, 150, 75, 31, 120]), the function would return [1, 4].
4. [Prime Number Finder](https://github.com/EreminD/codeacademy_challenges/blob/main/PrimeNumberFinder.js)
> Create a primeFinder() function that takes in a number, n, and returns all the prime numbers from 1 to n (inclusive). As a reminder, a prime number is a number that is only divisible by 1 and itself.
> 
> For example, primeFinder(11) should return [2, 3, 5, 7, 11].
5. [Flatten an Array](https://github.com/EreminD/codeacademy_challenges/blob/main/FlattenAnArray.js)
> Write a function, flattenArray(), that takes in a 2-dimensional array, flattens it into a 1-dimensional array, and returns it. You can assume that you will only be given one or two-dimensional arrays
> 
> For example, flattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
6. [Unique Characters in a String](https://github.com/EreminD/codeacademy_challenges/blob/main/UniqueCharactersInAString.js)
> Write a uniqueCharacters() function that determines if any given string has all unique characters (i.e. no character in the string is duplicated). If the string has all unique characters, the function should return true. If the string does not have all unique characters, return false.
> 
> For example, uniqueCharacters("apple") should return false.
> 
> Note that if the function is called with an empty string (""), the program should return an error message.
7. [Find the Missing Numbers](https://github.com/EreminD/codeacademy_challenges/blob/main/FindTheMissingNumbers.js)
> You have a bag containing tiles with numbers [1, 2, 3, …, n] written on them. Each number appears exactly once, so there are n tiles and n numbers. Now, without looking, k number tiles are randomly picked out of the bag and discarded. Create a missingNos() function that takes in a list and k, and returns the missing numbers in ascending order (from smallest to greatest).
> 
> For example, missingNos([1, 2, 4, 5, 6, 7, 8, 10], 2) should return [3, 9].
8. [Get X](https://github.com/EreminD/codeacademy_challenges/blob/main/GetX.js)
> Write a function, getX, that given an int x and a integer array num, returns the Xth number if the list was in sorted order. In other words, the Xth smallest number.
> 
> Function Name: getX
> 
> Input: An integer, x, and an unsorted list of integers nums that aren’t necessarily distinct
> 
> Output: The integer corresponding to the Xth number in the sorted list
> 
> Example:
> 
> getX(2, [5, 10, -3, -3, 7, 9]) => -3
> 
> The second number in order is -3.
> 
> getX(4, [5, 10, -3 , -3, 7, 9]) => 7
> 
> The fourth number in order is 7.
> 
> Note that this assumes the first number is position 1, not 0.
9. [Top Score Sorter](https://github.com/EreminD/codeacademy_challenges/blob/main/TopScoreSorter.js)
> Write a scoreSorter() function that will take a list of unsorted scores along with the highest possible score. It should return a sorted list of all of the scores, in descending order from high to low. You are expected to create and implement your own sorting algorithm for this challenge.
> 
> For example, scoreSorter([1, 2, 3, 9999, 13], 10000) should return [9999, 13, 3, 2, 1].
10. [Reverse Words](https://github.com/EreminD/codeacademy_challenges/blob/main/ReverseWords.js)
> Write a wordReverser() function that will take a given string and reverse the order of the words. You may assume that the string is a sentence that contains only letters and spaces, with all words separated by one space.
> 
> For example, wordReverser("Codecademy rules") should return "rules Codecademy" and wordReverser("May the Fourth be with you") should return "you with be Fourth the May".
11. [Fibonacci Finder](https://github.com/EreminD/codeacademy_challenges/blob/main/FibonacciFinder.js)
> Create a fibFinder() function that finds the nth number in the Fibonacci sequence. As a reminder, the Fibonacci sequence is a mathematical sequence that begins with 0 and 1, with each following term being the sum of the two previous terms.
> 
> For example, the first two terms of the sequence are represented by fibFinder(0) and fibFinder(1), which return 0 and 1, respectively. fibFinder(6) should return 
