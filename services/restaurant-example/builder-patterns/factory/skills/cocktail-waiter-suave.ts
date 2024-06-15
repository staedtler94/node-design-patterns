import { HOSPITALITY_ROLES } from "../enum";
import { Skill } from "./skill.interface";
import { SKILLS } from "./skills.enum";

export class CocktailWaiterSuave implements Skill {
    skill: SKILLS;
    description: string;
    experience: string;
    skillAlignment: HOSPITALITY_ROLES.WAITER;

    constructor(){
        this.skill = SKILLS.COCKTAIL_WAITER;
        this.description = "The ability to serve cocktails with style and grace.";
        this.experience = "Advanced";
        this.skillAlignment = HOSPITALITY_ROLES.WAITER;
    }

    useSkill(): void {
        console.log("Cocktail Waiter serves cocktails with style and grace.");
    }
    
}