/**
 * 100. 相同的树
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
示例 1：
输入：p = [1,2,3], q = [1,2,3]
输出：true
示例 2：
输入：p = [1,2], q = [1,null,2]
输出：false
示例 3：
输入：p = [1,2,1], q = [1,1,2]
输出：false
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
/**
 * 正确
 * 思路：如果两个节点都不存在就返回true，
 * 如果只有一个节点存在，就返回false，
 * 如果两个节点都存在，就比较值不相等就返回false
 * 如果值相等，就递归比较两棵树的左子树和右子树都相等就返回true，否则返回false
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};