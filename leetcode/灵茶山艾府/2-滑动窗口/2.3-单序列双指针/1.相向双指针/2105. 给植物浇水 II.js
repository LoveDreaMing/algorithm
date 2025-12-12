/**
 * @param {number[]} plants
 * @param {number} capacityA
 * @param {number} capacityB
 * @return {number}
 */
var minimumRefill = function (plants, capacityA, capacityB) {
  const len = plants.length;
  const res = new Array(len).fill(0);
  let left = 0,
    right = len - 1;
  let remainA = capacityA,
    remainB = capacityB;
  while (left <= right) {
    if (remainA < remainB) {
      if (remainA >= plants[left]) {
        remainA -= plants[left];
        res[left] = 0;
      } else {
        res[left] = Math.ceil(plants[left] / capacityA);
        remainA = res[left] * capacityA - plants[left];
      }
      left++;
      if (remainB >= plants[right]) {
        remainB -= plants[right];
        res[right] = 0;
      } else {
        res[right] = Math.ceil(plants[right] / capacityB);
        remainB = res[right] * capacityB - plants[right];
      }
      right--;
    } else {
      if (remainB >= plants[right]) {
        remainB -= plants[right];
        res[right] = 0;
      } else {
        res[right] = Math.ceil(plants[right] / capacityB);
        remainB = res[right] * capacityB - plants[right];
      }
      right--;
      if (remainA >= plants[left]) {
        remainA -= plants[left];
        res[left] = 0;
      } else {
        res[left] = Math.ceil(plants[left] / capacityA);
        remainA = res[left] * capacityA - plants[left];
      }
      left++;
    }
  }
  return res.reduce((a, b) => a + b);
};

var minimumRefill = function (plants, capacityA, capacityB) {
  const len = plants.length;
  let res = 0;
  let left = 0,
    right = len - 1;
  let remainA = capacityA,
    remainB = capacityB;
  while (left < right) {
    if (remainA < plants[left]) {
      const times = Math.ceil(plants[left] / capacityA);
      res += times;
      remainA = capacityA * times;
    }
    remainA -= plants[left];
    left++;
    if (remainB < plants[right]) {
      const times = Math.ceil(plants[right] / capacityB);
      res += times;
      remainB = capacityB * times;
    }
    remainB -= plants[right];
    right--;
  }
  if (left === right) {
    if (remainA >= remainB) {
      if (remainA < plants[left]) {
        const times = Math.ceil(plants[left] / capacityA);
        res += times;
      }
    } else {
      if (remainB < plants[right]) {
        const times = Math.ceil(plants[right] / capacityB);
        res += times;
      }
    }
  }
  return res;
};

console.log(minimumRefill([2, 2, 3, 3], 5, 3)); // 1
console.log(minimumRefill([2, 2, 3, 3], 3, 4)); // 2
console.log(minimumRefill([5], 10, 8)); // 0
console.log(minimumRefill([1, 2, 4, 4, 5], 6, 5)); // 2
console.log(minimumRefill([2, 1, 1], 2, 2)); // 0
console.log(minimumRefill([2, 3, 3], 5, 5)); // 0
