/**
 * 206. 反转链表
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
示例 1：
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：
输入：head = [1,2]
输出：[2,1]
示例 3：
输入：head = []
输出：[]
提示：
链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000
进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
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
 * 正确
 * 思路：定义prev保存前一个节点，定义cur为当前节点
 * 当cur为真，及不等于null时进入循环
 * 先保存下一个节点nextOne = cur.next，
 * 然后把当前节点下一个节点cur.next = prev，
 * 再把当前节点赋值给prev，
 * 再把下一个节点nextOne赋值给cur，
 * 最后直接prev
*/
var reverseList = function (head) {
    let prev = null;
    let cur = head;
    while (cur) {
        const nextOne = cur.next;
        cur.next = prev;
        prev = cur;
        cur = nextOne;
    }
    return prev;
};
