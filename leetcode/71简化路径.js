/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const paths = path.split('/');
    const stack = [];
    for (let i = 0; i < paths.length; i++) {
        const cur = paths[i];
        if (cur === '..') {
            stack.pop();
        } else if (cur === '.' || cur === '') {
            continue;
        } else {
            stack.push(cur);
        }
    }
    return '/' + stack.join('/');
};

console.log(simplifyPath('/home/')); // /home
console.log(simplifyPath('/../')); // /
console.log(simplifyPath('/home//foo/')); // /home/foo
console.log(simplifyPath('/a/./b/../../c/')); // /c
console.log(simplifyPath('/.../a/../b/c/../d/./')); // /.../b/d
