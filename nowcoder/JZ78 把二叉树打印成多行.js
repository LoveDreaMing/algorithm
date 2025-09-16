/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pRoot TreeNode类
 * @return int整型二维数组
 */
function Print(pRoot) {
    // write code here
    if (!pRoot) return [];
    const result = [];
    const queue = [pRoot];
    while (queue.length > 0) {
        const size = queue.length;
        const level = [];
        for (let i = 0; i < size; i++) {
            const first = queue.shift();
            if (!first) continue;
            level.push(first.val);
            if (first.left) queue.push(first.left);
            if (first.right) queue.push(first.right);
        }
        if (level.length > 0) result.push(level);
    }
    return result;
}
module.exports = {
    Print: Print
};
