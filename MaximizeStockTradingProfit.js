function maxProfitDays(stockPrices) {
  const maxPrice = Math.max(...stockPrices)
  const maxDay = stockPrices.indexOf(maxPrice)

  if(maxDay === 0) {
    const arr = stockPrices.slice(1)

    if(arr) {
      const res = maxProfitDays(arr)
      res[0]+=1
      res[1]+=1
      return res 
    } else {
      return []
    }
  }

  const pricesBeforeMax = stockPrices.slice(0, maxDay)
  const minPrice = Math.min(...pricesBeforeMax)
  const minDay = pricesBeforeMax.indexOf(minPrice)

  return [minDay, maxDay]
}

// Leave this so we can test your code:
module.exports = maxProfitDays;
