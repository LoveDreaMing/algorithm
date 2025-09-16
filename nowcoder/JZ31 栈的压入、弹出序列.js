/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pushV int整型一维数组
 * @param popV int整型一维数组
 * @return bool布尔型
 */
function IsPopOrder(pushV, popV) {
    // write code here
    let index = 0;
    const result = [];
    for (let i = 0; i < pushV.length; i++) {
        result.push(pushV[i]);
        while (result.length > 0 && result[result.length - 1] === popV[index]) {
            result.pop();
            index++;
        }
    }
    return result.length === 0;
}
console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
module.exports = {
    IsPopOrder: IsPopOrder
};
