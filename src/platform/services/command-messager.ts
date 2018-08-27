import ICommand from "../interfaces/command";

export default class CommandMessager {
    private static _caches: Map<string, ICommand<any>> = new Map<string, ICommand<any>>();
    private static _executeHistory: Array<string> = new Array<string>();

    public static execute(key: string, ...args: any[]): any {
        const result = this._caches.get(key).execute.apply(this, args);
        this._executeHistory.push(key);
        return result;
    }

    public static register(key: string, classType: any): void {
        this._caches.set(key, new classType());
    }
}