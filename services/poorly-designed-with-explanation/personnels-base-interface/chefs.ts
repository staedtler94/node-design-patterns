import { HOSPITALITY_ROLES } from "../../restaurant-example/builder-patterns/factory/restraurant-setup/enum";
import { IPerson } from "./person.interface";

export class Chef implements IPerson{

    constructor(details: Partial<Chef>) {
        this._name = details.name;
        this._age = details.age;
        this._badgeNumber = details.badgeNumber;
        this._gender = details.gender;
        this._cuisine_skills = details.cooking_cuisine;
    }
    private readonly _name: string;
    public get name(): string {
        return this._name;
    }
    private readonly _age: number;
    public get age(): number {
        return this._age;
    }
    private readonly _gender?: string;
    public get gender(): string {
        return this._gender;
    }
    private readonly _badgeNumber: string;
    public get badgeNumber(): string {
        return this._badgeNumber;
    }
    private readonly _role: HOSPITALITY_ROLES;
    public get role(): HOSPITALITY_ROLES {
        return this._role;
    }

    private _cuisine_skills: string[];
    public get cooking_cuisine(): string[] {
        return this._cuisine_skills;
    }

    public set cooking_cuisine(value: string[]) {
        this._cuisine_skills = value;
    }

    public addCuisineSkills(value: string) {
        this._cuisine_skills.push(value);
    }

    prepare(cuisine: string) {
        console.log(`Chef ${this.name} is preparing ${cuisine}`);
    }

    cook(cuisine: string) {
        console.log(`Chef ${this.name} is cooking ${cuisine}`);
    }
}