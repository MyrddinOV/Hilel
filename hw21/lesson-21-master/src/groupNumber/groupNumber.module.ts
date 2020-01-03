import { Module } from '@nestjs/common';
import { GroupController } from './controllers/groupNumber.controller';
import { DatabaseModule } from '../database/database.module';
import { groupNumberProvider } from './groupNumber.providers';
import { GroupNumberService } from './services/groupNumber.service';


@Module({
  imports: [DatabaseModule],
  controllers: [GroupController],
  providers: [GroupNumberService, groupNumberProvider],
})
export class GroupNumber {}
