import { isNullOrUndefined } from 'util';
import Role from "../models/role";
import { Abilities } from '../models/ability/abilities';

export default class RoleDataService {
    private static _roles: Role[] = [];

    public static createRole(): Promise<Role> {
        return new Promise<Role>((resolve) => {
            let role = new Role();
            resolve(role);
        })
    }

    public static readRoles(): Promise<Role[]> {
        return new Promise<Role[]>((resolve => {
            // const path = require('path');
            // path.resolve(__dirname, '../../../../../../../../dist/data/dnd/roles.json')
            // "/Users/zhengzhizhao/Local Documents/project/trpg-runner/dist/data/dnd/roles.json"
            const fs = require('fs');
            let dataPath = '/Users/zhengzhizhao/Local Documents/project/trpg-runner/dist/data/dnd/roles.json'
            fs.readFile(dataPath, 'utf8', (err: any, data: any) => {
                if (err) throw err;
                const roleJson = JSON.parse(data);
                let roles: Role[] = [];
                if (!isNullOrUndefined(roleJson) && !isNullOrUndefined(roleJson.roles)) {
                    roles = roleJson.roles.map((json: any) => {
                        let role = new Role();
                        role = Object.assign({}, role, json);
                        role.abilities = new Abilities(
                            json.abilities.str,
                            json.abilities.dex,
                            json.abilities.con,
                            json.abilities.int,
                            json.abilities.wis,
                            json.abilities.cha);
                        return role;
                    })
                }
                RoleDataService._roles = roles;
                resolve(roles);
            });
        }));
    }

    public static getRole(roleId: number): Role {
        return RoleDataService._roles.find(role => role.id === roleId);
    }
}