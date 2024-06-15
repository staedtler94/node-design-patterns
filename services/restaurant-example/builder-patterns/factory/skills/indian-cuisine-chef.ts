import { HOSPITALITY_ROLES } from "../enum";
import { Skill } from "./skill.interface";
import { SKILLS } from "./skills.enum";

export class IndianCuisineChef implements Skill{

    skill: SKILLS;
    description: string;
    experience: string;
    
    skillAlignment: HOSPITALITY_ROLES.CHEF;

    constructor() {
        this.description = '';
        
    }

    useSkill(): void {
        console.log(`Chef prepares Italian cuisine`);
    }
}