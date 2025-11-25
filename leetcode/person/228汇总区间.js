/**
 * 228. 汇总区间
 * 给定一个 无重复元素 的 有序 整数数组 nums 。
返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
列表中的每个区间范围 [a,b] 应该按如下格式输出：
"a->b" ，如果 a != b
"a" ，如果 a == b
示例 1：
输入：nums = [0,1,2,4,5,7]
输出：["0->2","4->5","7"]
解释：区间范围是：
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
示例 2：
输入：nums = [0,2,3,4,6,8,9]
输出：["0","2->4","6","8->9"]
解释：区间范围是：
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
/**
 * 超时
 * 思路：单独处理数组长度是0和1的情况，然后从数组的第一个数字遍历到数组的最后一个数字；
 * 判断当前数字是否存在原数组中，如果存在并且i - 1 等于 nums[idx - 1]，则将当前数字添加到数组的最后一个数组内，
 * 否则以当前数组新开一个数组放到末尾；
 * 最后进行格式转化
 */
// var summaryRanges = function (nums) {
//     if (nums.length === 0) {
//         return [];
//     }
//     if (nums.length === 1) {
//         return [`${nums[0]}`];
//     }
//     const end = nums[nums.length - 1];
//     const start = nums[0];
//     const result = [];
//     for (let i = start; i <= end; i++) {
//         const idx = nums.indexOf(i);
//         if (idx > -1 && i - 1 === nums[idx - 1]) {
//             result[result.length - 1].push(i);
//         } else if (idx > -1) {
//             result.push([i]);
//         }
//     }
//     const res = [];
//     for (let i = 0; i < result.length; i++) {
//         if (result[i].length > 1) {
//             res[i] = `${result[i][0]}->${result[i][result[i].length - 1]}`;
//         } else {
//             res[i] = result[i].join();
//         }
//     }
//     return res;
// };

/**
 * 正确
 * 思路：单独数组为空的情况，当数组不为空时，先把第一个数字以字符串的形式添加到reslut中；
 * 然后从第二个数字开始遍历数组，判断当前数字减1是否等于前一个数字，如果相等，则重新拼接数组的最后一个结果；
 * 如果不相等，则把当前数字以字符串的形式放到数组最后一个
 */
var summaryRanges = function (nums) {
    if (nums.length === 0) return [];
    const result = [`${nums[0]}`];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - 1 === nums[i - 1]) {
            const sp = result[result.length - 1].split('->');
            result[result.length - 1] = `${sp[0]}->${nums[i]}`;
        } else {
            result.push(`${nums[i]}`);
        }
    }
    return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ["0->2","4->5","7"]
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // ["0","2->4","6","8->9"]
console.log(summaryRanges([-1])); // ["-1"]
console.log(summaryRanges([-2147483648, -2147483647, 2147483647])); // ['-2147483648->-2147483647', '2147483647']
