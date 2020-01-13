import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { ProductsController } from "./controller/products.controller";
import { ProductsService } from "./service/products.service";
import { productsProvider } from "./products.providers"



@Module({
    imports: [DatabaseModule],
    controllers: [ProductsController],
    providers: [ProductsService, productsProvider],
})

export class ProductsModule { }