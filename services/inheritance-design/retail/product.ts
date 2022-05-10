import { IProduct } from "./interfaces/product.interface";

export class Product implements IProduct {
    readonly skuNumber: string;
    readonly name: string;
    readonly vendor: string;
    readonly category: string;
    readonly taxRate: number;
    readonly costPrice: number;
    readonly salesPrice: number;
    readonly discountRate: number;

    constructor(
        skuNumber: string,
        name: string,
        vendor: string,
        category: string,
        taxRate: number,
        costPrice: number,
        salesPrice: number
    ) {
        this.skuNumber = skuNumber;
        this.name = name;
        this.vendor = vendor;
        this.category = category;
        this.taxRate = taxRate;
        this.costPrice = costPrice;
        this.salesPrice = salesPrice;
    }

    getDetails(): IProduct {
        return this;
    }
}