import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { ProductsService } from '../service/products.service';
import { Product } from '../schema/products.schema';

@Controller('products')
export class ProductsController {
    constructor(
        public productsService: ProductsService
    ) { }

    @Get('all')
    async getProducts() {
        return await this.productsService.getAllProducts()
    }

    @Get(':id')
    async getOneProduct(@Param() data: { id: string }) {
        return await this.productsService.getProductById(data.id);
    }

    @Post('')
    async createProduct(@Body() body: Product) {
        return await this.productsService.createProduct(body)
    }
}