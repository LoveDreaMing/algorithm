/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组
 * @return int整型
 */
// 使用额外数组保存已经出现过的数字
// function duplicate(numbers) {
//     // write code here
//     const arr = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (arr.includes(numbers[i])) {
//             return numbers[i];
//         }
//         arr.push(numbers[i]);
//     }
//     return -1;
// }

// 用索引位置和值对应，如果已经存在说明重复了
function duplicate(numbers) {
    // write code here
    for (let i = 0; i < numbers.length; i++) {
        while (numbers[i] !== i) {
            if (numbers[i] === numbers[numbers[i]]) {
                return numbers[i];
            }
            const tmp = numbers[i];
            numbers[i] = numbers[tmp];
            numbers[tmp] = tmp;
        }
    }
    return -1;
}
console.log(duplicate([2, 3, 1, 0, 2, 5, 3]));
module.exports = {
    duplicate: duplicate
};
