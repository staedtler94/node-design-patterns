import { HOSPITALITY_ROLES } from "../enum";
import { Person } from "./person";

export class Chef extends Person{

    constructor(details: Partial<Chef>) {
        super({...details, role: HOSPITALITY_ROLES.CHEF});
        this._cuisine_skills = details.cooking_cuisine;
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