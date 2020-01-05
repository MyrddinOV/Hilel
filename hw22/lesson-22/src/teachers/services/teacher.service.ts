import { Injectable, Inject } from "@nestjs/common";
import { ITeacher, Teacher } from "../schemas/teacher.schema";
import { Model } from 'mongoose';



@Injectable()
export class TeacherService {
    constructor(
        @Inject('TeacherModelToken') private readonly teacherModel: Model<Teacher>,
    ) { }
    async createTeacher(teacher: Teacher) {
        return await this.teacherModel.create(teacher);
    }

    async getAllTeachers() {
        return await this.teacherModel.find()
    }
}