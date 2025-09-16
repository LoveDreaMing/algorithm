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

// 使用isReverse判断每一层的数据是向左还是向右反转的
function Print(pRoot) {
    // write code here
    if (!pRoot) return [];
    const result = [];
    const queue = [pRoot];
    let isReverse = true;
    while (queue.length > 0) {
        const size = queue.length;
        const level = [];
        for (let i = 0; i < size; i++) {
            const item = queue.shift();
            if (!item) continue;
            level.push(item.val);
            if (item.left) queue.push(item.left);
            if (item.right) queue.push(item.right);
        }
        if (!isReverse) level.reverse();
        result.push(level);
        isReverse = !isReverse;
    }
    return result;
}

function Print(pRoot) {
    // write code here
    if (!pRoot) return [];
    const result = [];
    let queue = [pRoot];
    let isReverse = true;
    while (queue.length > 0) {
        const size = queue.length;
        const level = [];
        const newQueue = [];
        for (let i = 0; i < size; i++) {
            const item = queue.shift();
            if (!item) continue;
            isReverse ? level.push(item.val) : level.unshift(item.val);
            if (item.left) newQueue.push(item.left);
            if (item.right) newQueue.push(item.right);
        }
        queue = newQueue;
        result.push(level);
        isReverse = !isReverse;
    }
    return result;
}
module.exports = {
    Print: Print
};
