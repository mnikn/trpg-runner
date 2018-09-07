import Command from "../../platform/decorators/command";
import ICommand from "../../platform/interfaces/command";

@Command('coc.role.create')
export default class CreateRoleCommand implements ICommand<void> {
    execute(): void {
        alert('Create');
    }
}