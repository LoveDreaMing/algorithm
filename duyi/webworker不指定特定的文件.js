const coder = 'console.log("worker")';

// 方法1:使用Object URL
const blog = new Blob([coder], {type: 'application/javascript'});
const url = window.URL.createObjectURL(blog);
const worker = new Worker(url);

// 方法2: 使用Data URL
// const dataUrl = 'data:application/javascript;charset=utf-8,' + encodeURIComponent(coder); // 编码写法
const dataUrl = `data:application/javascript;utf-8,${coder}`;
const worker2  = new Worker(dataUrl);