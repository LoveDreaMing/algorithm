/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param number int整型
 * @return int整型
 */

// 递归
function jumpFloor(number) {
    // write code here
    if (number < 3) return number;
    return jumpFloor(number - 1) + jumpFloor(number - 2);
}

// 循环遍历
function jumpFloor(number) {
    // write code here
    const arr = [1, 2];
    for (let i = 2; i < number; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[number - 1];
}

// 循环遍历 + 变量
function jumpFloor(number) {
    // write code here
    if (number < 3) return number;
    let result = 0,
        prev = 1,
        next = 2;
    for (let i = 3; i <= number; i++) {
        result = prev + next;
        prev = next;
        next = result;
    }
    return result;
}

module.exports = {
    jumpFloor: jumpFloor
};
