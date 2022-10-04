/*
You're given strings jewels representing the types of stones that are jewels, 
and stones representing the stones you have. Each character in stones is a type of stone you have. 
You want to know how many of the stones you have are also jewels.
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
*/

const jewelsinStones = (jewels, stones) => {
  let jewelCount = 0;
  let i = 0;
  for (let j = 0; j < stones.length; j++) {
    if (jewels[i] == stones[j]) {
      jewelCount++;
    }
    if (!(i > jewels.length) && j == stones.length - 1) {
      j = 0;
      i += 1;
    }
  }
  return jewelCount;
};

console.log(jewelsinStones("aA", "aAAbbbb"));
console.log(jewelsinStones("z", "ZZ"));
