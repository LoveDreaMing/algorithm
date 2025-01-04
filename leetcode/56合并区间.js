/**
 * 56. 合并区间
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
示例 1：
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：
输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
提示：
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/**
 * 正确
 * 思路：先将intervals按照每一个数组的第一位进行排序
 * 然后遍历intervals，如果result里面已经存在值，并且result最后一个数组的末尾大于等于下一项的开头，
 * 就比较当前项的末尾和result最后一个数组的末尾取大值，更新result最后一个数组的末尾，
 * 否则就把当前数组插入result里，最后返回result
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    for (const arr of intervals) {
        if (result.length && result.at(-1)[1] >= arr[0]) {
            result.at(-1)[1] = Math.max(arr[1], result.at(-1)[1]);
        } else {
            result.push(arr);
        }
    }
    return result;
};

console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
    ])
); // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
console.log(
    merge([
        [1, 4],
        [4, 5]
    ])
); // [ [ 1, 5 ] ]
