/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型
 */
function minNumberInRotateArray(nums) {
    // write code here
    let left = 0,
        right = nums.length - 1;
    while (left < right) {
        const mid = left + parseInt((right - left) / 2);
        if (nums[left] === nums[mid] && nums[right] === nums[mid]) {
            return sequenceSearch(nums, left, right);
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
    function sequenceSearch(nums, l, r) {
        for (let i = l; i < r; i++) {
            if (nums[i] > nums[i + 1]) {
                return nums[i + 1];
            }
        }
        return nums[l];
    }
}
module.exports = {
    minNumberInRotateArray: minNumberInRotateArray
};
