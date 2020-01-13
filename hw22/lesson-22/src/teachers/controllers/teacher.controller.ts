import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { TeacherService } from '../services/teacher.service';
import { Teacher } from '../schemas/teacher.schema';

@Controller('teacher')
export class TeacherController {
  constructor(
    // public teacherService: TeacherService

    @Inject('NewBestToken') private teacherService: TeacherService

  ) { }


  @Get('all')
  async getTeacher() {
    const res = await this.teacherService.getAllTeachers()
    return res
  }

  @Post('')
  async createTeacher(@Body() body: Teacher) {
    const res = await this.teacherService.createTeacher(body)
    return res
  }

}
