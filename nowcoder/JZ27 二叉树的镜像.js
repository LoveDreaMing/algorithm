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
 * @return TreeNode类
 */

// 当前函数内完成
function Mirror(pRoot) {
    // write code here
    if (pRoot === null) return null;
    const l = pRoot.left;
    pRoot.left = Mirror(pRoot.right);
    pRoot.right = Mirror(l);
    return pRoot;
}
// 增加swap辅助函数
function Mirror(pRoot) {
    // write code here
    if (pRoot === null) return null;
    swap(pRoot);
    Mirror(pRoot.left);
    Mirror(pRoot.right);
    return pRoot;
    function swap(root) {
        const t = root.left;
        root.left = root.right;
        root.right = t;
    }
}
module.exports = {
    Mirror: Mirror
};
