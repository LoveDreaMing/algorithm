function preciseCountDown(time, toTick, onComplete) {
    const start = performance.now();

    function update() {
        const difference = performance.now() - start;
        const remaning = Math.max(time - difference, 0);

        const seconds = Math.floor((remaning / 1000) % 60)
            .toString()
            .padStart(2, '0'); // 秒
        const minutes = Math.floor((remaning / (1000 * 60)) % 60)
            .toString()
            .padStart(2, '0'); // 分
        const hours = Math.floor((remaning / (1000 * 60 * 60)) % 24)
            .toString()
            .padStart(2, '0'); // 时

        toTick && toTick({ seconds, minutes, hours });
        if (remaning > 0) {
            const nextTick = 1000 - (difference % 1000);
            setTimeout(update, nextTick);
        } else {
            onComplete && onComplete();
        }
    }
    update();
}

preciseCountDown(
    1000 * 6,
    ({ seconds, minutes, hours }) => {
        console.log(`倒计时剩余：${hours}时${minutes}分${seconds}秒`);
    },
    () => {
        console.log('倒计时结束');
    }
);
