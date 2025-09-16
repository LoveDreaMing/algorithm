// 递归
function jumpFloorII(number) {
    // write code here
    if (number < 2) return number;
    return jumpFloorII(number - 1) * 2;
}

// 循环遍历
function jumpFloorII(number) {
    // write code here
    const arr = [1];
    for (let i = 1; i < number; i++) {
        arr[i] = arr[i - 1] * 2;
    }
    return arr[number - 1];
}

// 循环遍历 + 变量
function jumpFloorII(number) {
    // write code here
    if (number < 2) return number;
    let result = 0,
        prev = 1;
    for (let i = 2; i <= number; i++) {
        result = prev * 2;
        prev = result;
    }
    return result;
}
module.exports = {
    jumpFloorII: jumpFloorII
};
