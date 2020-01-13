import { Injectable, Inject } from "@nestjs/common";
import { Product } from "../schema/products.schema";
import { Model } from 'mongoose';



@Injectable()
export class ProductsService {
    constructor(
        @Inject('ProductsToken') private readonly productsModel: Model<Product>,

    ) { }
    async createProduct(product: Product) {
        return await this.productsModel.create(product);
    }

    async getAllProducts() {
        return await this.productsModel.find()
    }

    async getProductById(id: string) {
        return await this.productsModel.findOne({_id: id}).lean().exec()
    }
}