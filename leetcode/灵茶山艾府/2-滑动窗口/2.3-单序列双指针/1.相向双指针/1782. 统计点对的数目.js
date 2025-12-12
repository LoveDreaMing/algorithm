/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} queries
 * @return {number[]}
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} queries
 * @return {number[]}
 */
var countPairs = function (n, edges, queries) {
  // 1. 统计度 & 边的重数（只记录 u<v 的标准化键）
  const deg = new Array(n).fill(0);
  const edgeCount = new Map(); // key: "u#v" (u<v), value: multiplicity

  for (const [u, v] of edges) {
    // inputs 通常是 1..n，转换为 0..n-1
    const a = u - 1,
      b = v - 1;
    deg[a]++;
    deg[b]++;
    const key = a < b ? `${a}#${b}` : `${b}#${a}`;
    edgeCount.set(key, (edgeCount.get(key) || 0) + 1);
  }

  // 2. 拷贝并排序度数组，用于双指针计数
  const sorted = Array.from(deg).sort((a, b) => a - b);
  const answers = new Array(queries.length).fill(0);

  // 对每个 query，用双指针统计 deg[i] + deg[j] > q 的对数
  for (let qi = 0; qi < queries.length; qi++) {
    const q = queries[qi];
    let l = 0,
      r = n - 1;
    let cnt = 0;
    while (l < r) {
      if (sorted[l] + sorted[r] > q) {
        // 对于当前 r，所有 index in (l..r-1) 与 r 都满足
        cnt += r - l;
        r--;
      } else {
        l++;
      }
    }
    answers[qi] = cnt;
  }

  // 3. 修正计数：遍历每个存在边的节点对 (u,v)（只遍历有边的对）
  //    如果 deg[u]+deg[v] > q 但 deg[u]+deg[v]-cntEdges <= q，则把 answers[q]--。
  for (const [key, multi] of edgeCount.entries()) {
    const [as, bs] = key.split('#').map(Number);
    const sum = deg[as] + deg[bs];
    for (let qi = 0; qi < queries.length; qi++) {
      const q = queries[qi];
      if (sum > q && sum - multi <= q) {
        answers[qi]--;
      }
    }
  }

  return answers;
};

console.log(
  countPairs(
    4,
    [
      [1, 2],
      [2, 4],
      [1, 3],
      [2, 3],
      [2, 1]
    ],
    [2, 3]
  )
); // [ 6, 5 ]
console.log(
  countPairs(
    5,
    [
      [1, 5],
      [1, 5],
      [3, 4],
      [2, 5],
      [1, 3],
      [5, 1],
      [2, 3],
      [2, 5]
    ],
    [1, 2, 3, 4, 5]
  )
); // [ 10, 10, 9, 8, 6 ]
