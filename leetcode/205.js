/**
 * 205. 同构字符串
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。
如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
示例 1:
输入：s = "egg", t = "add"
输出：true
示例 2：
输入：s = "foo", t = "bar"
输出：false
示例 3：
输入：s = "paper", t = "title"
输出：true
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * 错误
 * 思路：将两个字符串转化为两个map，然后对比两个map的值的顺序是否一致，这种('bbbaaaba', 'aaabbbba')不匹配，字母的顺序也要一致
 */
// var isIsomorphic = function (s, t) {
//     if (s.length != t.length) return false;
//     const map1 = new Map();
//     const map2 = new Map();
//     for (let i = 0; i < s.length; i++) {
//         if (map1.has(s[i])) {
//             map1.set(s[i], map1.get(s[i]) + 1);
//         } else {
//             map1.set(s[i], 1);
//         }
//         if (map2.has(t[i])) {
//             map2.set(t[i], map2.get(t[i]) + 1);
//         } else {
//             map2.set(t[i], 1);
//         }
//     }
//     const a1 = map1.values();
//     const a2 = map2.values();
//     let v1 = a1.next().value;
//     let v2 = a2.next().value;
//     while (v1 && v2) {
//         if (v1 !== v2) {
//             return false;
//         }
//         v1 = a1.next().value;
//         v2 = a2.next().value;
//     }
//     return true;
// };
/**
 * 正确
 * 思路：用一个对象来存储两个字符串的映射关系，然后对比对象的key和value是否一致
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) return false;
    const obj = {};
    for (let i = 0; i < s.length; i++) {
        if (!Object.keys(obj).includes(s[i]) && !Object.values(obj).includes(t[i])) {
            obj[s[i]] = t[i];
        } else {
            if (obj[s[i]] !== t[i]) {
                return false;
            }
        }
    }
    return true;
};

console.log(isIsomorphic('egg', 'add')); // true
console.log(isIsomorphic('foo', 'bar')); // false
console.log(isIsomorphic('paper', 'title')); // true
console.log(isIsomorphic('bbbaaaba', 'aaabbbba')); // false
