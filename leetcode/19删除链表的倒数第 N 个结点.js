/**
 * 19. 删除链表的倒数第 N 个结点
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
示例 1：
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：
输入：head = [1], n = 1
输出：[]
示例 3：
输入：head = [1,2], n = 1
输出：[1]
提示：
链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
进阶：你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */

/**
 * 正确
 * 思路：先遍历链表，把链表的每一项都保存到arr数组中，
 * 再使用数组的splice方法删除第 -n 项，
 * 重新遍历数组arr，将每一项保存到新的链表result中，最后返回新链表result的头cur，
 * 不符合进阶
 */
// var removeNthFromEnd = function (head, n) {
//     const arr = [];
//     while (head) {
//         arr.push(head.val);
//         head = head.next;
//     }
//     arr.splice(-n, 1);
//     let result = new ListNode();
//     const cur = result;
//     for (let num of arr) {
//         result.next = new ListNode(num);
//         result = result.next;
//     }
//     return cur.next;
// };

/**
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;   // 节点的值
        this.next = next; // 指向下一个节点
    }
}
 * 正确
 * 思路：需要理解ListNode的构造器，
 * 定义一个快慢指针，然后result指向slow的头部，
 * 先让快指针走完n步，然后快慢指针同时走，
 * 直到fast.next不存在，此时fast处在最后一个节点位置，slow处在要删除的节点前一个位置，
 * 然后把slow的下一个节点slow.next直接指向下下一个节点slow.next.next，
 * 最后返回result.next
*/
// var removeNthFromEnd = function (head, n) {
//     let slow = new ListNode(0, head); // 创建一个伪头节点，代表慢指针
//     let fast = new ListNode(0, head); // 创建一个伪头节点，代表快指针
//     const result = slow;
//     while(n--) {
//         fast = fast.next;
//     }
//     while(fast.next) {
//         slow = slow.next;
//         fast = fast.next;
//     }
//     slow.next = slow.next.next;
//     return result.next;
// };

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let slow = new ListNode(-1, head);
    let fast = new ListNode(-1, head);
    const result = slow;
    while (n--) {
        fast = fast.next;
    }
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return result.next;
};
