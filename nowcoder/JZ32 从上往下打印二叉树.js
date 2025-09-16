/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root) {
    // write code here
    if (!root) return [];
    const result = [];
    const arr = [root];
    while (arr.length > 0) {
        const prev = arr.shift();
        if (prev) {
            result.push(prev.val);
            arr.push(prev.left);
            arr.push(prev.right);
        }
    }
    return result;
}
module.exports = {
    PrintFromTopToBottom: PrintFromTopToBottom
};
