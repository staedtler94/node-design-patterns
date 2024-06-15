import { HOSPITALITY_ROLES } from "../enum";
import { SKILLS } from "./skills.enum";

export interface Skill {
    skill: SKILLS;
    description: string;
    experience: string;
    skillAlignment: HOSPITALITY_ROLES;
    useSkill(): void;
}