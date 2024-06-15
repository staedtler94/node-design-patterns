import { CocktailWaiterSuave } from "./cocktail-waiter-suave";
import { IndianCuisineChef } from "./indian-cuisine-chef";
import { ItalianCuisineChef } from "./italian-cuisine-chef";
import { Skill } from "./skill.interface";
import { SKILLS } from "./skills.enum";
import { WaiterCommunication } from "./waiter-communication.skill";


// this again is a Singleton Method but for simplicity has been kept in together with the factory of skills 
export class SkillsFactory {
    constructor() { }

    static impartSkills(skillListed: string): Skill {

        switch (skillListed) {
            case SKILLS.WAITER_COMMUNICATION:
                return new WaiterCommunication();
            case SKILLS.COCKTAIL_WAITER:
                return new CocktailWaiterSuave();
            case SKILLS.INDIAN_CUISINE_CHEF:
                return new IndianCuisineChef();
            case SKILLS.ITALIAN_CUISINE_CHEF:
                return new ItalianCuisineChef();
            default:
                return null;
        }
        
    }
}