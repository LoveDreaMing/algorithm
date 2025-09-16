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
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */
function FindKthToTail(pHead, k) {
    // write code here
    let cur = pHead;
    let result = pHead;
    while (cur) {
        cur = cur.next;
        k--;
        if (k < 0) {
            result = result.next;
        }
    }
    if (k > 0) {
        return null;
    }
    return result;
}
module.exports = {
    FindKthToTail: FindKthToTail
};
