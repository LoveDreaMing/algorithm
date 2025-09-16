function VerifySquenceOfBST(sequence) {
    // write code here
    if (!sequence || sequence.length === 0) return false;
    return verify(sequence, 0, sequence.length - 1);
    function verify(arr, first, last) {
        if (last - first <= 1) return true; // 说明不足3个节点
        const root = arr[last];
        let curIndex = first;
        // 找出第一个大于根节点值的索引
        while (curIndex < last && arr[curIndex] <= root) {
            curIndex++;
        }
        // 如果右侧节点有小于根节点的直接返回false
        for (let i = curIndex; i < last; i++) {
            if (arr[i] < root) return false;
        }
        return (
            verify(arr, first, curIndex - 1) && verify(arr, curIndex, last - 1)
        );
    }
}
module.exports = {
    VerifySquenceOfBST: VerifySquenceOfBST
};
