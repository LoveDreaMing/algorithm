const createProxy = (value = 0) => {
    const valueGetter = () => value;
    return new Proxy(
        {},
        {
            get(target, key) {
                if (key === Symbol.toPrimitive) {
                    return valueGetter;
                }
                return createProxy(value + Number(key));
            }
        }
    );
};

const p = createProxy();

console.log(p[1][2][3] + 4); // 10
console.log(p[10][30] + 4); // 44
console.log(p[10] + 100); // 110
