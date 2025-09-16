class LruCache {
    #cache;
    constructor(limit) {
        if (!Number.isInteger(limit) || limit <= 0) {
            throw new Error('请输入有效的数字');
        }
        this.limit = limit;
        this.#cache = new Map();
    }
    has(key) {
        return this.#cache.has(key);
    }
    get(key) {
        if (!this.#cache.has(key)) return;
        const value = this.#cache.get(key);
        this.#cache.delete(key);
        this.#cache.set(key, value);
        return value;
    }
    put(key, value) {
        // if (this.#cache.has(key)) {
        //     this.#cache.delete(key);
        // } else if (this.#cache.size >= this.limit){
        //     this.#cache.delete(this.#cache.keys().next().value);
        // }
        if (this.#cache.has(key) || this.#cache.size >= this.limit) {
            const removeKey = this.#cache.has(key)
                ? key
                : this.#cache.keys().next().value;
            this.#cache.delete(removeKey);
        }
        this.#cache.set(key, value);
    }
    size() {
        return this.#cache.size;
    }
    keys() {
        return Array.from(this.#cache.keys());
    }
}
