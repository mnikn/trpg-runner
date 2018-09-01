import "reflect-metadata";

let _caches: Map<string, any> = new Map<string, any>();

export default function Inject(classType: any, ...args: any[]) {
    let factory = Reflect.getMetadata('Service', classType);
    return function (target: any, propertyKey: string): void {
        let key = classType.toString();
        if (_caches.has(key)) {
            target[propertyKey] = _caches.get(key);
            return;
        }

        let result = null;;
        if (factory) {
            result = factory.apply(args);
        } else {
            result = new classType(args);
        }
        target[propertyKey] = result;
        _caches.set(key, result);
    };
}

export class Injector {
    public static get<T>(classType: any, ...args: any[]): T {
        let target: any = {};
        Inject(classType, args)(target, 'result');
        return target.result;
    }
} 
