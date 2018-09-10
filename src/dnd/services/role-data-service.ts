import Role from "../models/role";
import * as fs from 'fs';
import RoleJsonConverter from './converters/json-converter';
import * as _ from 'lodash';
import { ProfessionInfo } from "../models/profession";
import { Abilities } from "../models/ability/abilities";

export default class RoleDataService {
    private static _roles: Role[] = [];

    public static createRole(): Promise<Role[]> {
        return new Promise<Role[]>((resolve) => {
            let role = new Role();
            role.id = RoleDataService._roles.length + 1;
            role.name = '角色' + role.id;
            role.profession = ProfessionInfo.FIGHTER.id;
            role.abilities = new Abilities(8, 8, 8, 8, 8, 8);

            RoleDataService._roles.push(role);
            RoleJsonConverter.toJson(RoleDataService._roles).then(json => {
                let dataPath = '/Users/zhengzhizhao/Local Documents/project/trpg-runner/dist/data/dnd/roles.json';
                fs.writeFile(dataPath, json, (error => {
                    console.log(error);
                    resolve(RoleDataService._roles);
                }));
            })

            // return role;
        });
    }

    public static readRoles(): Promise<Role[]> {
        return new Promise<Role[]>((resolve => {
            // const path = require('path');
            // path.resolve(__dirname, '../../../../../../../../dist/data/dnd/roles.json')
            // "/Users/zhengzhizhao/Local Documents/project/trpg-runner/dist/data/dnd/roles.json"
            const fs = require('fs');
            let dataPath = '/Users/zhengzhizhao/Local Documents/project/trpg-runner/dist/data/dnd/roles.json'
            fs.readFile(dataPath, 'utf8', (err: any, json: any) => {
                if (err) throw err;
                RoleJsonConverter.toRole(json).then((roles: Role[]) => {
                    RoleDataService._roles = roles;
                    resolve(roles);
                })
            });
        }));
    }

    public static getRole(roleId: number): Role {
        return RoleDataService._roles.find(role => role.id === roleId);
    }
}