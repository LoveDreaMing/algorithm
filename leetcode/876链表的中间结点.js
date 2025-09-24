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
// 用一个count计数总共有多少个节点，然后再从头遍历到中间节点
var middleNode = function (head) {
    let count = 0;
    let cur = head;
    while (cur) {
        count++;
        cur = cur.next;
    }
    let result = head;
    const end = Math.floor(count / 2);
    for (let i = 0; i < end; i++) {
        result = result.next;
    }
    return result;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
