import { HOSPITALITY_ROLES } from "../enum";

export interface Skill {
    skill: string;
    description: string;
    experience: string;
    skillAlignment: HOSPITALITY_ROLES;
    useSkill(): void;
}