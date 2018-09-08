import { Male } from './../../../base/models/sex';
import { Police } from '../../models/profession';
import Role from "../../models/role";
import BaseService from '../../../platform/services/base-service';
import Service from '../../../platform/decorators/service';

@Service()
export default class RoleDataService extends BaseService {
    private _selected: Set<number> = new Set<number>();

    private _onSelectionChanged: Array<(selectedItems: number[]) => void> = [];

    getRoles(): Promise<Role[]> {
        return new Promise<Role[]>(resolve => {
            let roles: Role[] = [];
            for (let i = 0; i < 10; ++i) {
                let role = new Role();
                role.id = i;
                role.name = 'sans';
                role.sex = new Male();
                role.avtarUrl = '../resources/default-role-avtar.jpg';
                role.profession = new Police();
                roles.push(role);
            }
            resolve(roles);
        });
    }

    public revertSelect(id: number): void {
        if (!this._selected.has(id)) {
            this._selected.add(id);
        } else {
            this._selected.delete(id);
        }
        this.fireOnSelectionChanged();
    }

    public hasSelected(id: number): boolean {
        return this._selected.has(id);
    }

    public hasSelection(): boolean {
        return this._selected.size !== 0;
    }

    public getSelected(): number[] {
        return Array.from(this._selected.values());
    }

    public registerOnSelectionChanged(callback: (selectedItems: number[])=> void) {
        this._onSelectionChanged.push(callback);
    }

    public fireOnSelectionChanged(): void {
        this._onSelectionChanged.forEach(callback => callback(this.getSelected()));
    }
}