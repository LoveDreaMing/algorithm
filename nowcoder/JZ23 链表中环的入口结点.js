/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
    // write code here
    if (!pHead || !pHead.next) return null;
    let slow = pHead,
        fast = pHead;
    do {
        if (!fast || !fast.next) return null;
        slow = slow.next;
        fast = fast.next.next;
    } while (slow !== fast);
    fast = pHead;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}
module.exports = {
    EntryNodeOfLoop: EntryNodeOfLoop
};
