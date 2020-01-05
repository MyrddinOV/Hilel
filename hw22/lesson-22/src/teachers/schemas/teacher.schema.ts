import * as mongoose from 'mongoose';

export const teacherSchema: any = new mongoose.Schema({
    name: String,
    age: Number,
    experience: Number,
    studentId: [mongoose.Schema.Types.ObjectId]
});

export interface Teacher {
    name: String;
    age: Number;
    experience: Number;
    studentId: mongoose.Schema.Types.ObjectId[];
}

export interface ITeacher extends Document, Teacher {
}