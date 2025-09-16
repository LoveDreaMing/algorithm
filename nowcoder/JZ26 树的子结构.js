/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function HasSubtree(pRoot1, pRoot2) {
    // write code here
    if (pRoot1 === null || pRoot2 === null) {
        return false;
    }
    return (
        isSame(pRoot1, pRoot2) ||
        HasSubtree(pRoot1.left, pRoot2) ||
        HasSubtree(pRoot1.right, pRoot2)
    );
    function isSame(root1, root2) {
        if (root2 === null) {
            return true;
        }
        if (root1 === null) {
            return false;
        }
        if (root1.val !== root2.val) {
            return false;
        }
        return (
            isSame(root1.left, root2.left) && isSame(root1.right, root2.right)
        );
    }
}
module.exports = {
    HasSubtree: HasSubtree
};
