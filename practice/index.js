var maxProfit = function(prices) {
    let buy = prices[0]
  let profit = 0
  for(let i = 1; i < prices.length; i++){
    if(buy > prices[i]){
        buy = prices[i] 
    }
    profit = Math.max(profit, prices[i] - buy)
  }

  return profit
};

// let arr = [2,4,1]
// console.log(maxProfit(arr))

var isAnagram = function(s, t) {
    let result = false
    if(s.length != t.length){
        return result
    } else {
        for(const str of s){
            if(t.search(str) > -1){
                t = t.replace(str,'')
                result = true
            } else {
                result = false
            }
            if(result == false) return result
        }

        return result
    }

};

// console.log(isAnagram("anagram","nagaram"))
// console.log(isAnagram("aacc","ccac"))

const clearDigits = (s) => {
    let res = s;

    while(/\d/g.test(res)){
        res = res.replace(/.\d/,'')
        console.log(res.replace(/d/,''))
    }

    return res;
};

console.log(clearDigits('cb@34'))
