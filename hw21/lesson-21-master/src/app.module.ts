import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ConfigModule } from './config.module';
import { GroupNumber } from './groupNumber/groupNumber.module';

@Module({
  imports: [StudentModule, ConfigModule, GroupNumber],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
