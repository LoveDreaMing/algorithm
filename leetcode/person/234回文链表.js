/**
 * 234. 回文链表
 * 给你一个单链表的头节点 head ，请你判断该链表是否为
回文链表
。如果是，返回 true ；否则，返回 false 。
示例 1：
输入：head = [1,2,2,1]
输出：true
示例 2：
输入：head = [1,2]
输出：false
提示：
链表中节点数目在范围[1, 105] 内
0 <= Node.val <= 9
进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */

/**
 * 正确：
 * 思路：定义一个数组用来保存链表中的每一项，
 * 然后定义两个指针，指向头和尾，
 * 当left小于right时，进入循环，如果头和尾不相等则返回false，否则left++，right--，
 * 最后返回true
 */
// var isPalindrome = function (head) {
//     const arr = [];
//     while (head) {
//         arr.push(head.val);
//         head = head.next;
//     }
//     let left = 0,
//         right = arr.length - 1;
//     while (left < right) {
//         if (arr[left] !== arr[right]) return false;
//         left++;
//         right--;
//     }
//     return true;
// };

/**
 * 正确
 * 思路：递归深入，再递归回溯
 * 定义cur保存当前链表的头，定义递归函数dfs，
 * 开始从头到尾通过dfs一层一层递归到尾，
 * 然后比较首位节点的val是否相等，不相等直接返回false，
 * 相等就赋值下一个节点，继续比较下一个节点
*/
var isPalindrome = function (head) {
    let cur = head;
    function dfs(node) {
        if (node === null) return true;
        return dfs(node.next) && node.val === cur.val && (cur = cur.next);
    }
    return dfs(cur);
};

console.log(isPalindrome([1, 2, 2, 1])); // true;
console.log(isPalindrome([1, 2])); // false
console.log(isPalindrome([1, 0, 1])); // true
