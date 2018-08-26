export default class Intjector {
    private static _cache: Map<string, any> = new Map<string, any>();

    public static get<T>(key: string): T {
        return this._cache.get(key);
    }

    public static register<T>(key: string, value: T): void {
        this._cache.set(key, value);
    }

}