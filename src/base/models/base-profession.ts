export default abstract class BaseProfession {
    // protected static _name: string = '未知';
    abstract getId(): number;
    abstract getLabel(): string;
}