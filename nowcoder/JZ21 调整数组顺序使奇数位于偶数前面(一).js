/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型一维数组
 */

// 定义一个奇数数组和一个偶数数组
function reOrderArray(array) {
    // write code here
    const odd = [],
        even = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            odd.push(array[i]);
        } else {
            even.push(array[i]);
        }
    }
    return [...odd, ...even];
}

// 冒泡排序
function reOrderArray(array) {
    // write code here
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] % 2 === 0 && array[j + 1] % 2 === 1) {
                // [array[j], array[j + 1]] = [array[j + 1], array[j]];
                const t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
            }
        }
    }
    return array;
}

console.log(reOrderArray([1, 2, 3, 4]));
console.log(reOrderArray([1, 3, 5]));
module.exports = {
    reOrderArray: reOrderArray
};
