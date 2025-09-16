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
 * @param root TreeNode类
 * @param target int整型
 * @return int整型二维数组
 */
function FindPath(root, target) {
    // write code here
    if (!root) return [];
    const result = [];
    dfs(root, target, []);
    return result;
    function dfs(root, target, path) {
        if (!root) return;
        path.push(root.val);
        if (!root.left && !root.right && root.val === target) {
            result.push([...path]);
        }
        const r = target - root.val;
        // 需要一直走到最后一个子节点
        dfs(root.left, r, path);
        dfs(root.right, r, path);
        path.pop();
    }
}
module.exports = {
    FindPath: FindPath
};
