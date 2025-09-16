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
 * @param pHead1 ListNode类
 * @param pHead2 ListNode类
 * @return ListNode类
 */
// 递归
function Merge(pHead1, pHead2) {
    // write code here
    if (pHead1 === null && pHead2 === null) return null;
    if (pHead1 === null) return pHead2;
    if (pHead2 === null) return pHead1;
    if (pHead1.val >= pHead2.val) {
        pHead2.next = Merge(pHead1, pHead2.next);
        return pHead2;
    } else {
        pHead1.next = Merge(pHead1.next, pHead2);
        return pHead1;
    }
}

// 循环
function Merge(pHead1, pHead2) {
    // write code here
    if (pHead1 === null && pHead2 === null) return null;
    if (pHead1 === null) return pHead2;
    if (pHead2 === null) return pHead1;
    let result = new ListNode(null);
    const head = result;
    while (pHead1 && pHead2) {
        if (pHead1.val >= pHead2.val) {
            result.next = pHead2;
            pHead2 = pHead2.next;
        } else {
            result.next = pHead1;
            pHead1 = pHead1.next;
        }
        result = result.next;
    }
    if (pHead1) {
        result.next = pHead1;
    }
    if (pHead2) {
        result.next = pHead2;
    }
    return head.next;
}
module.exports = {
    Merge: Merge
};
