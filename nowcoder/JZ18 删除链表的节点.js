/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @param val int整型
 * @return ListNode类
 */
function deleteNode(head, val) {
    // write code here
    if (head == null || val == null || head === val) return null;
    if (head.val === val) return head.next;
    let cur = head;
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next;
            break;
        }
        cur = cur.next;
    }
    return head;
}
module.exports = {
    deleteNode: deleteNode
};
