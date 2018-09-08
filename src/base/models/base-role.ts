import BaseProfession from "./base-profession";
import { Sex } from "./sex";

export default abstract class BaseRole {
    id: number;
    age: number;
    name: string;
    sex: Sex;
    avtarUrl: string;
    profession: BaseProfession;
}