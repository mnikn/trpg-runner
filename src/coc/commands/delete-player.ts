import Command from "../../platform/decorators/command";
import ICommand from "../../platform/interfaces/command";

@Command('coc.player.delete')
export default class DeletePlayerCommand implements ICommand<void> {
    execute(ids: number[]): void {
        alert('Delete');
    }
}