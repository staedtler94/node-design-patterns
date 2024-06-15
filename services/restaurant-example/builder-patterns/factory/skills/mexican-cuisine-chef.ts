import { HOSPITALITY_ROLES } from "../enum";
import { Skill } from "./skill.interface";
import { SKILLS } from "./skills.enum";

export class MexicanCuisineChef implements Skill{
    constructor() {}
    skill: SKILLS;
    description: string;
    experience: string;
    
    skillAlignment: HOSPITALITY_ROLES.CHEF;

    useSkill(): void {
        console.log(`Chef prepares Italian cuisine`);
    }
}