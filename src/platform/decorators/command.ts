import "reflect-metadata";
import CommandMessager from "../services/command-messager";

export default function Command(key: string) {
    return function <T extends { new(...args: any[]): {} }>(constructor: T) {
        Reflect.defineMetadata('Command', key, constructor.prototype, 'key');
        CommandMessager.register(key, constructor);
        return constructor;
    };
}