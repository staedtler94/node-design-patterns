import { RestaurantAbstractFactoryService } from "./restaurantAbstractFactory";

const restStaff = new RestaurantAbstractFactoryService().staffEnlister();

console.log(JSON.stringify(restStaff));