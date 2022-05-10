import { Product } from "./product";

export class ProductBuilder {
    constructor() { }

    buildProduct(
        skuNumber: string,
        name: string,
        vendor: string,
        category: string,
        taxRate: number,
        costPrice: number,
        salesPrice: number
    ): Product {

        return new Product(
            skuNumber, 
            name,
            vendor,
            category,
            taxRate,
            costPrice,
            salesPrice
        );
    }
}