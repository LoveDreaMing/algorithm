/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (head === null || left === right) {
        return head;
    }
    const dummy = new ListNode(-1, head);
    let prev = dummy;
    let cur = head;
    for (let i = 0; i < left - 1; i++) {
        prev = prev.next;
        cur = cur.next;
    }
    for (let i = 0; i < right - left; i++) {
        const nextOne = cur.next;
        cur.next = nextOne.next;
        nextOne.next = prev.next;
        prev.next = nextOne;
    }
    return dummy.next;
};
