import { HOSPITALITY_ROLES } from "../enum";
import { Skill } from "./skill.interface";

export class WaiterCommunication implements Skill{
    skill: string;
    description: string;
    experience: string;
    skillAlignment: HOSPITALITY_ROLES.WAITER;

    constructor(){
        this.skill = "Waiter Communication";
        this.description = "The ability to communicate effectively with customers and other staff members.";
        this.experience = "Intermediate";
        this.skillAlignment = HOSPITALITY_ROLES.WAITER;
    }
    

    useSkill(): void {
        console.log("Waiter communicates with customers and other staff members.");
    }
}