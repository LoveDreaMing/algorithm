/**
 * @param {number[]} nums
 * @return {number}
 */

// 判断第i位是否等于1
// var findMaxConsecutiveOnes = function (nums) {
//     let max = 0;
//     let distance = 0;
//     let start = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 1 && nums[i - 1] === 1) {
//             distance = i - start + 1;
//         } else if (nums[i] === 1 && nums[i - 1] !== 1) {
//             start = i;
//             distance = 1;
//         } else {
//             continue;
//         }
//         max = Math.max(max, distance);
//     }
//     return max;
// };

// 寻找最后一个0的位置
var findMaxConsecutiveOnes = function (nums) {
    let lastZero = -1;
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            lastZero = i;
        } else {
            result = Math.max(result, i - lastZero);
        }
    }
    return result;
};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2
console.log(findMaxConsecutiveOnes([0, 1])); // 1
console.log(findMaxConsecutiveOnes([1])); // 1
