import { Ability } from './../../models/ability';
import RoleConverter from "./base/role-converter";
import Role from "../../models/role";
import { isNullOrUndefined } from "util";
import { Skill } from '../../models/skill';

export default class RoleJsonConverter extends RoleConverter {
    public static toJson(roles: Role[]): Promise<string> {
        return new Promise<string>((resolve) => {
            let jsons = roles.map(role => {
                return JSON.stringify(role);
            });
            console.log(jsons);

            let jsonArray = '[' + jsons.join(',') + ']';
            console.log(jsonArray);
            resolve(jsonArray);
        });
    }

    public static toRole(json: string): Promise<Role[]> {
        return new Promise<Role[]>((resolve) => {
            const jsonData = JSON.parse(json);
            let roles: Role[] = [];
            if (!isNullOrUndefined(jsonData)) {
                roles = jsonData.map((json: any) => {
                    let role: Role = new Role();
                    Object.assign(role, json);
                    role.abilities = role.abilities.map(ability => new Ability(ability, ability.value));
                    return role;
                });
            }
            console.log(jsonData);
            console.log(roles);
            resolve(roles);
        });
    }
}