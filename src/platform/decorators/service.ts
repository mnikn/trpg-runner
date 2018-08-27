import "reflect-metadata";

export default function Service(factory?: (...args: any[]) => any) {
    return function<T extends { new(...args: any[]): {} }>(constructor: T) {
        Reflect.defineMetadata('Service', factory, constructor);
        return constructor;
    }
}