Function.prototype.myCall = function (func, ...args) {
    const key = Symbol('key');
    func[key] = this;
    const result =  func[key](...args);
    delete func[key];
    return result;
};

const p = {
    a: 1
};

const f = function (...args) {
    console.log(this, ...args);
};

f.myCall(p, 1, 2, 3);
