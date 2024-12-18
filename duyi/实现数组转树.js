/**
 * 思路：暴力解法，先遍历获取到所有的id
 * 再遍历寻找所有的父节点，push到result里，并且从原数组中删除已经push的节点
 * 遍历剩余的子节点，同时遍历result使用递归的方式插入到树形结构中
 */
// function insert(parent, item) {
//     if (item.parent === parent.id) {
//         if (parent.children && parent.children.length > 0) {
//             parent.children.push(item);
//         } else {
//             parent.children = [item];
//         }
//     } else {
//         if (parent.children && parent.children.length > 0) {
//             parent.children.forEach((element) => {
//                 insert(element, item);
//             });
//         } else {
//             return;
//         }
//     }
// }
// function arrayToTree(arr) {
//     const rootValues = [];
//     for (const item of arr) {
//         rootValues.push(item.id);
//     }
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!rootValues.includes(arr[i].parent)) {
//             result.push(arr[i]);
//             arr.splice(i, 1);
//         }
//     }
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < result.length; j++) {
//             insert(result[j], arr[i]);
//         }
//     }
//     return result;
// }

/**
 * 思路：使用map结构以id为键，item为值保存起来
 * 遍历数组，判断当前节点的parent等于null，作为根节点直接push到roots里，
 * 不等于null的说明是子节点，使用item.parent从map结构中获取当前节点的父级点
 * 没有children设置为空数组，并且插入当前节点到父节点的children中
 * 最后直接返回roots
 * 以空间换时间，时间复杂度为O(n)
*/
function arrayToTree(arr) {
    const map = new Map();
    for (let item of arr) {
        map.set(item.id, item);
    }
    const roots = [];
    for (let item of arr) {
        if (item.parent === null) {
            roots.push(item);
        } else {
            const parent = map.get(item.parent);
            if (!parent.children) {
                parent.children = [];
            }
            parent.children.push(item);
        }
    }
    return roots;
}

arrayToTree([
    {
        id: 1,
        value: 1,
        parent: null
    },
    {
        id: 2,
        value: 2,
        parent: 1
    },
    {
        id: 3,
        value: 3,
        parent: 2
    },
    {
        id: 4,
        value: 4,
        parent: 1
    }
]);
