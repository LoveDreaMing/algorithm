const a = {
    value: 1,
    [Symbol.toPrimitive]: function () {
        return this.value++;
    },
    valueOf: function () {
        return this.value++;
    },
    toString: function () {
        return this.value++;
    }
};

const p = new Proxy(a, {
    get(target, key) {
        console.log('key', key); // key的顺序是Symbol(Symbol.toPrimitive) -> valueOf -> toString
        return target[key];
    }
});

// console.log(a == 1 && a == 2 && a == 3);
console.log(p == 1);
