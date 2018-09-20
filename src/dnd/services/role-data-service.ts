import Role from "../models/role";
import * as fs from 'fs';
import RoleJsonConverter from './converters/json-converter';
import * as _ from 'lodash';
import { ProfessionInfo } from "../models/profession";
import { SkillInfo } from "../models/skill";
import AbilityInfo from "../models/ability";

export default class RoleDataService {
    private static _roles: Role[] = [];

    public static createRole(): Promise<Role> {
        return new Promise<Role>((resolve) => {
            let role = new Role();
            role.id = RoleDataService._roles.length + 1;
            role.name = '角色' + role.id;
            role.skills = SkillInfo.createSkills();
            role.level = 1;
            role.languages = [];
            role.profession = ProfessionInfo.getProfession('FIGHTER');
            role.hpDiceNumbers = [role.profession.hpDiceType];
            role.abilities = AbilityInfo.createAbilities();

            RoleDataService._roles.push(role);
            RoleJsonConverter.toJson(RoleDataService._roles).then(json => {
                let dataPath = '/Users/zhengzhizhao/Local Documents/project/trpg-runner/dist/data/dnd/roles.json';
                fs.writeFile(dataPath, json, (error => {
                    console.log(error);
                    resolve(_.cloneDeep(role));
                }));
            })

            // return role;
        });
    }

    public static readRoles(): Promise<Role[]> {
        return new Promise<Role[]>((resolve => {
            const fs = require('fs');
            let dataPath = '/Users/zhengzhizhao/Local Documents/project/trpg-runner/dist/data/dnd/roles.json'
            fs.readFile(dataPath, 'utf8', (err: any, json: any) => {
                if (err) throw err;
                RoleJsonConverter.toRole(json).then((roles: Role[]) => {
                    RoleDataService._roles = roles;
                    resolve(_.cloneDeep(roles));
                })
            });
        }));
    }

    public static getRole(roleId: number): Role {
        let role = RoleDataService._roles.find(role => role.id === roleId);
        return _.cloneDeep(role);
    }

    public static updateRole(role: Role): Promise<Role> {
        return new Promise<Role>((resolve) => {
            let index = RoleDataService._roles.findIndex(e => e.id === role.id);
            RoleDataService._roles[index] = role;
            RoleJsonConverter.toJson(RoleDataService._roles).then(json => {
                let dataPath = '/Users/zhengzhizhao/Local Documents/project/trpg-runner/dist/data/dnd/roles.json';
                fs.writeFile(dataPath, json, (error => {
                    console.log(error);
                    resolve(_.cloneDeep(RoleDataService._roles[index]));
                }));
            })
        });
    }

    public static deleteRole(ids: number[]): Promise<number[]>{
        return new Promise<number[]>((resolve) => {
            RoleDataService._roles = RoleDataService._roles.filter(role => !_.includes(ids, role.id));
            RoleJsonConverter.toJson(RoleDataService._roles).then(json => {
                let dataPath = '/Users/zhengzhizhao/Local Documents/project/trpg-runner/dist/data/dnd/roles.json';
                fs.writeFile(dataPath, json, (error => {
                    console.log(error);
                    resolve(ids);
                }));
            })
        });
    }
}