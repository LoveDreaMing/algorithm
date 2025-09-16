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
 * @return bool布尔型
 */
function isSymmetrical(pRoot) {
    // write code here
    if (pRoot === null) {
        return true;
    }
    return isSame(pRoot.left, pRoot.right);
    function isSame(l, r) {
        if (l === null && r === null) {
            return true;
        }
        if (l === null || r === null) {
            return false;
        }
        if (l.val !== r.val) {
            return false;
        }
        return isSame(l.left, r.right) && isSame(l.right, r.left);
    }
}
module.exports = {
    isSymmetrical: isSymmetrical
};
