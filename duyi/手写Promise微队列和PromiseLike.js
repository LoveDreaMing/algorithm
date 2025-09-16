function microQueue(fn) {
    if (typeof queueMicrotask === 'function') {
        queueMicrotask(fn);
    } else if (
        typeof process === 'object' &&
        typeof process.nextTick === 'function'
    ) {
        process.nextTick(fn);
    } else if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(() => fn);
        const textNode = document.createTextNode('');
        observer.observe(textNode, { characterData: true });
        textNode.data = '1';
    } else {
        setTimeout(fn, 0);
    }
}

function isPromiseLike(obj) {
    return (
        !!obj &&
        (typeof obj === 'object' || typeof obj === 'function') &&
        typeof obj.then === 'function'
    );
}
