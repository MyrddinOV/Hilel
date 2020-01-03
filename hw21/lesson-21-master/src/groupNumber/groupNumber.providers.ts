import { Connection, Document, Model } from 'mongoose';
import { groupNumberSchema } from './schemas/groupNumber.schema';

export const groupNumberProvider: any = 
  {
    provide: 'GroupNumberModelToken',
    useFactory: (connection: Connection): Model<Document> => connection.model('GroupNumberModel', groupNumberSchema),
    inject: ['DbConnectionToken'],
  }
