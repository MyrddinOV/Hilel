import { Controller, Get, Post, Body} from '@nestjs/common';
import { GroupNumberService } from '../services/groupNumber.service';
import { GroupNumber } from '../schemas/groupNumber.schema';

@Controller('GroupNumber')
export class GroupController {
  constructor(
    public groupService: GroupNumberService
  ) { }

  @Get('aggregate')
  async getAgregateGroup() {
    const res = await this.groupService.getAgregateGroup();
    return res;
  }

  @Post('')
  async createGroup(@Body() body: GroupNumber) {
    const res = await this.groupService.createGroup(body);
    return res;
  }
}
