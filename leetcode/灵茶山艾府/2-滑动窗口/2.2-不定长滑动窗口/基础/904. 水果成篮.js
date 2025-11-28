/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let res = 0;
  let left = 0;
  const map = new Map();
  for (let right = 0; right < fruits.length; right++) {
    const cur = fruits[right];
    map.set(cur, (map.get(cur) || 0) + 1);
    while (map.size > 2) {
      const leftItem = fruits[left];
      map.set(leftItem, map.get(leftItem) - 1);
      if (map.get(leftItem) === 0) {
        map.delete(leftItem);
      }
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res;
};

console.log(totalFruit([1, 2, 1])); // 3
console.log(totalFruit([0, 1, 2, 2])); // 3
console.log(totalFruit([1, 2, 3, 2, 2])); // 4
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); // 5
