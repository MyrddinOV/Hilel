// tslint:disable-next-line:no-var-requires
// const mongoose: any = require('mongoose');
import * as mongoose from 'mongoose';


export const groupNumberSchema: any = new mongoose.Schema({
    groupNumber: Number,
    studentId: mongoose.Schema.Types.ObjectId,
    });

// tslint:disable-next-line:interface-name
export interface GroupNumber {
    readonly groupNumber: number;
    readonly studentId: mongoose.Schema.Types.ObjectId;
    
}

export interface ITicket extends Document, GroupNumber {
}
