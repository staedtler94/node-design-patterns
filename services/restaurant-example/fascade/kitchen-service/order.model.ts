export interface Order{
    name: string;
    description?: string;
    allergies?: string[];
    waiter: Waiter;
    chef: Chef
}