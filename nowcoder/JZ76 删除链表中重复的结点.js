/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead) {
    // write code here
    if (pHead === null || pHead.next === null) return pHead;
    let next = pHead.next;
    if (pHead.val === next.val) {
        while (next !== null && pHead.val === next.val) {
            next = next.next;
        }
        return deleteDuplication(next);
    } else {
        pHead.next = deleteDuplication(pHead.next);
        return pHead;
    }
}
module.exports = {
    deleteDuplication: deleteDuplication
};
