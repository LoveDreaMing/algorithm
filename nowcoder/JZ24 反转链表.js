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
 * @return ListNode类
 */

// 递归
function ReverseList(head) {
    // write code here
    if (head === null || head.next === null) return head;
    let next = head.next;
    head.next = null;
    const result = ReverseList(next);
    next.next = head;
    return result;
}

// 循环
function ReverseList(head) {
    // write code here
    let prev = null; // 用于保存反转后的前一个节点，初始为 null
    while (head) {
        const next = head.next; // 暂存下个节点（防止断链）
        head.next = prev; // 改变当前节点的指向，让它指向前一个节点
        prev = head; // prev向前一步，移动到当前节点
        head = next; // head向前一步，继续处理下一个节点
    }
    return prev; // 返回新的头节点（反转后的链表头）
}
module.exports = {
    ReverseList: ReverseList
};
