/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    for (let i = 0; i < tokens.length; i++) {
        const cur = tokens[i];
        if (['+', '-', '*', '/'].includes(cur)) {
            const next = stack.pop();
            const prev = stack.pop();
            switch (cur) {
                case '+':
                    stack.push(prev + next);
                    break;
                case '-':
                    stack.push(prev - next);
                    break;
                case '*':
                    stack.push(prev * next);
                    break;
                case '/':
                    stack.push(Math.trunc(prev / next));
                    break;
            }
        } else {
            stack.push(Number(cur));
        }
    }
    return stack.pop();
};

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log(
    evalRPN([
        '10',
        '6',
        '9',
        '3',
        '+',
        '-11',
        '*',
        '/',
        '*',
        '17',
        '+',
        '5',
        '+'
    ])
); // 22
