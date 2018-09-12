import RoleConverter from "./base/role-converter";
import Role from "../../models/role";
import { Abilities } from "../../models/ability/abilities";
import { isNullOrUndefined } from "util";
import { SkillInfo } from "../../models/skill";

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
                    role = Object.assign({}, role, json);
                    role.abilities = new Abilities(
                        json.abilities.str.value,
                        json.abilities.dex.value,
                        json.abilities.con.value,
                        json.abilities.int.value,
                        json.abilities.wis.value,
                        json.abilities.cha.value);
                    role.skills = json.skills.map((skill: any) => {
                        let factory = SkillInfo.getSkillById(skill.id).constructor;
                        return new factory(skill.assignedPoint);
                    });
                    return role;
                });
            }
            resolve(roles);
        });
    }
}