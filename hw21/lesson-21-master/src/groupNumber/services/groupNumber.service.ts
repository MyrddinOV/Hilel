import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';

import { GroupNumber } from '../schemas/groupNumber.schema';

@Injectable()
export class GroupNumberService {
  constructor(
    @Inject('GroupNumberModelToken') private readonly groupNumberModel: Model<GroupNumber>,

  ) { }

  async createGroup(group: GroupNumber) {
    
    return await this.groupNumberModel.create(group);
  }

  async getAgregateGroup() {
    return await this.groupNumberModel.aggregate([{$lookup: {from: "studentmodels", localField: "studentId", foreignField: "_id", as: "aggregate"}}]);
  }
}