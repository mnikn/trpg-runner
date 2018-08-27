import Command from "../../platform/decorators/command";
import ICommand from "../../platform/interfaces/command";

@Command('coc.player.create')
export default class CreatePlayerCommand implements ICommand<void> {
    execute(): void {
        alert('Create');
    }
}