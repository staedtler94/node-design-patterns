import { HOSPITALITY_ROLES } from "../enum";
import { Skill } from "./skill.interface";

export class CocktailWaiterSuave implements Skill {
    skill: string;
    description: string;
    experience: string;
    skillAlignment: HOSPITALITY_ROLES.WAITER;

    constructor(){
        this.skill = "Cocktail Waiter Suave";
        this.description = "The ability to serve cocktails with style and grace.";
        this.experience = "Advanced";
        this.skillAlignment = HOSPITALITY_ROLES.WAITER;
    }

    useSkill(): void {
        console.log("Cocktail Waiter serves cocktails with style and grace.");
    }
    
}