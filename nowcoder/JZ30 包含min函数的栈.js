const arr = [];
function push(node) {
    // write code here
    arr.push(node);
}
function pop() {
    // write code here
    arr.pop();
}
function top() {
    // write code here
    return arr[arr.length - 1];
}
function min() {
    // write code here
    return Math.min(...arr);
}
module.exports = {
    push: push,
    pop: pop,
    top: top,
    min: min
};
