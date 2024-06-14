import { PersonDTO } from "./dto/person.dto";
import { RestaurantStaffDTO } from "./dto/restaurantStaff.dto";
import { HOSPITALITY_ROLES } from "./enum";
import { Chef } from "./roles/chef.role";
import { Waiter } from "./roles/waiter.role";
import { Skill } from "./skills/skill.interface";
import { WaiterCommunication } from "./skills/waiter-communication.skill";
import { staffConfig } from "./staff-config";

export class RestaurantAbstractFactoryService {
    constructor() { }
    
    private buildWaiterPerson(details?: Partial<PersonDTO>) {
        
        const skillsEnlisted = this.getAllEnlistedSkills(details.skills);

        return new Waiter({
            name: details.name || 'Waiter Default Name',
            age: details.age || 20,
            badgeNumber: details.badgeNumber || 'W1234',
            role: HOSPITALITY_ROLES.WAITER,
            gender: details.gender || 'FEMALE',
            skills: skillsEnlisted
        });
    }


    private getSkills(skillListed: string): Skill {

        if (skillListed === 'WaiterCommunication')
            return new WaiterCommunication();
        else
            return null;
    }

    private getAllEnlistedSkills(gotSkills?: string[]): Skill[] {
        const skillsEnlisted: Skill[] = [];

        if (gotSkills) {
            gotSkills.forEach(skill => {
                const skillInstance = this.getSkills(skill);
                if (skillInstance) {
                    skillsEnlisted.push(skillInstance);
                }
            });
        }

        return skillsEnlisted;
    }

    private buildChefPerson(details?: Partial<PersonDTO>) {

        const skillsEnlisted = this.getAllEnlistedSkills(details.skills);

        return new Chef({
            name: details.name || 'Chef Default Name',
            age: details.age || 30,
            badgeNumber: details.badgeNumber || 'C1234',
            role: HOSPITALITY_ROLES.CHEF,
            gender: details.gender || 'FEMALE',
            skills: skillsEnlisted
        });
    }

    public staffEnlister(): RestaurantStaffDTO{
        const restaurantStaffs:RestaurantStaffDTO = {
            waiters: [],
            chefs: []
        };

        staffConfig.staffs.forEach(staff => {
            if (staff.role === 'WAITER') {
                restaurantStaffs.waiters.push(this.buildWaiterPerson(staff));
            }
            else if (staff.role === 'CHEF') {
                restaurantStaffs.chefs.push(this.buildChefPerson());
            }
        });

        return restaurantStaffs;
    }
}