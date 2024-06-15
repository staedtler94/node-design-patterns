import { HOSPITALITY_ROLES } from "../enum";
import { Skill } from "./skill.interface";
import { SKILLS } from "./skills.enum";

export class ItalianCuisineChef implements Skill{
    constructor() {
        this.description = 'Deals with all types of Italian Cuisines';
        this.experience = 'Advance';
        this.skill = SKILLS.ITALIAN_CUISINE_CHEF;
        this.skillAlignment = HOSPITALITY_ROLES.CHEF;
    }
    skill: SKILLS;
    description: string;
    experience: string;

    skillAlignment: HOSPITALITY_ROLES.CHEF;

    useSkill(): void {
        console.log(`Chef prepares Italian cuisine`);
    }
}