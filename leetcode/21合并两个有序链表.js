/**
 * 21. 合并两个有序链表
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 * 示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：
输入：l1 = [], l2 = []
输出：[]
示例 3：
输入：l1 = [], l2 = [0]
输出：[0]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
/**
 * 正确
 * 思路：如果list1不存在，则直接返回list2，如果list2不存在，则直接返回list1
 * 如果list1.val < list2.val，则list1的第一位更小，就把list1.next和list2合并，返回list1
 * 否则说明list2的第一位更小，就把list1和list2.next合并，返回list2
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};

/**
 * 正确
 * 思路：如果list1不存在，则直接返回list2，如果list2不存在，则直接返回list1
 * 创建一个新的链表，用于存储合并后的链表，并且head指向新链表的第一个节点
 * 当list1和list2都不为空时，比较两个链表的第一个节点的值，将较小的节点插入到新链表中
 * 最后把剩余的list1或者list2插入末尾，最后返回head的下一个节点
 */
var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    let result = new ListNode();
    const head = result;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            result.next = list1;
            list1 = list1.next;
        } else {
            result.next = list2;
            list2 = list2.next;
        }
        result = result.next;
    }
    result.next = list1 || list2;
    return head.next;
};