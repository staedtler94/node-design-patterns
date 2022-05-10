import { logger } from "../../utils";
import { Product } from "./product";
import { Category } from "./enum";

export function startListing() {
    const appleLaptop = new Product(
        'el-1',
        'Apple MacBook Pro',
        '',
        Category.ELECTRONICS.toString(),
        18,
        100,
        200
    );
    
    logger.info(appleLaptop.getDetails());
    
}