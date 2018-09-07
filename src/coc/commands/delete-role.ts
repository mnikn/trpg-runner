import Command from "../../platform/decorators/command";
import ICommand from "../../platform/interfaces/command";

@Command('coc.role.delete')
export default class DeleteRoleCommand implements ICommand<void> {
    execute(ids: number[]): void {
        alert('Delete');
    }
}