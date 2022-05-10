import { logger } from "../../utils";
import { Electronics } from "./electronics.product";
import { Category } from "./enum";

export function startListing() {
    const appleLaptop = new Electronics(
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