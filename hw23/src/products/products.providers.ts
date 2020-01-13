import { productsSchema } from "./schema/products.schema";
import { Connection, Document, Model } from 'mongoose';


export const productsProvider: any = 
{
    provide: 'ProductsToken',
    useFactory: (connection: Connection): Model<Document> => connection.model('ProductsModel', productsSchema),
    inject: ['DbConnectionToken']
}