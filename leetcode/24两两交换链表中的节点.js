/**
 * 24. 两两交换链表中的节点
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
示例 1：
输入：head = [1,2,3,4]
输出：[2,1,4,3]
示例 2：
输入：head = []
输出：[]
示例 3：
输入：head = [1]
输出：[1]
提示：
链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * 使用递归的方式
 * 注意边界条件!head || !head.next，空节点或者单个节点直接返回节点本身
 * 假设后面的节点都已经交换好了nextNext = swapPairs(head.next.next)，nextNext表示下下一个节点
 * 下一个节点const next = head.next，把下个节点的next指向本来的头head，
 * 头head的next指向下下个节点nextNext，
 * 最后返回next代表新的头部节点
 */
var swapPairs = function (head) {
    // 处理空或者当个节点
    if (!head || !head.next) {
        return head;
    }
    const nextNext = swapPairs(head.next.next);
    const next = head.next;
    head.next = nextNext;
    next.next = head;
    return next;
};
