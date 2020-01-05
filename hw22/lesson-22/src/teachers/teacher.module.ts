import { Module } from '@nestjs/common';
import { TeacherController } from './controllers/teacher.controller';
import { DatabaseModule } from '../database/database.module';
import { teacherProvider } from './teacher.providers';
import { TeacherService } from './services/teacher.service';


@Module({
  imports: [DatabaseModule],
  controllers: [TeacherController],
  providers: [{
    provide: 'NewBestToken',
    useClass: TeacherService
  },
    teacherProvider]

})
export class TeachersModule { }
