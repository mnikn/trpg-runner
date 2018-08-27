export default interface ICommand<T> {
    execute(...args: any[]): T;
}