/**
 * JZ70 矩形覆盖
 */

// 递归
function rectCover(number) {
    // write code here
    if (number < 3) return number;
    return rectCover(number - 1) + rectCover(number - 2);
}

// 循环遍历
function rectCover(number) {
    // write code here
    const arr = [0, 1, 2];
    for (let i = 3; i <= number; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[number];
}

// 循环遍历 + 变量
function rectCover(number) {
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
    rectCover: rectCover
};
