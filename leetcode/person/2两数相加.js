/**
 * 2. 两数相加
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
示例 1：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
示例 2：
输入：l1 = [0], l2 = [0]
输出：[0]
示例 3：
输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
提示：
每个链表中的节点数在范围 [1, 100] 内
0 <= Node.val <= 9
题目数据保证列表表示的数字不含前导零
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/**
 * 正确
 * 思路：定义result保存结果，head保存结果的头节点，余数remainder保存进位，
 * 当l1 || l2 || remainder任何一个存在就继续进入循环，
 * 如果l1存在，则把l1.val加到余数中，如果l2存在，则把l2.val加到余数中，
 * 当前节点result.next的值等于余数的个位数，然后把remainder改成余数的十位数，
 * 然后l1和l2分别往后移动一位，然后result往后移动一位，最后返回head.next
 */
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode();
    const head = result;
    let remainder = 0; // 余数
    while (l1 || l2 || remainder) {
        if (l1) remainder += l1.val;
        if (l2) remainder += l2.val;
        result.next = new ListNode(remainder % 10);
        remainder = Math.floor(remainder / 10);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        result = result.next;
    }
    return head.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 定义空头dummy
var addTwoNumbers = function (l1, l2) {
    const dummy = new ListNode();
    let cur = dummy;
    let remainder = 0; // 余数
    while (l1 || l2 || remainder) {
        if (l1) remainder += l1.val;
        if (l2) remainder += l2.val;
        cur.next = new ListNode(remainder % 10);
        remainder = Math.floor(remainder / 10);
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        cur = cur.next;
    }
    return dummy.next;
};
