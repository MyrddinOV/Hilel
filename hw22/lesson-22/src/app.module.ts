import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { ConfigModule } from './config.module';
import { TeachersModule } from './teachers/teacher.module';

@Module({
  imports: [StudentModule, ConfigModule, TeachersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
