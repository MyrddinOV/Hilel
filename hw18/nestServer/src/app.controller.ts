import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { evaluate } from 'mathjs';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getMainPage(): string {

    return this.appService.getMainPage();
  }

  @Get('get')
  getObj(): object {

    return this.appService.getObj();
  }

  @Post('post')
  postObj(@Body() addObj: object) {
    return this.appService.postObj(addObj);
  }

  @Delete('delete/:id')  
  deleteObj(@Param('id') removeObj: number) {
    return this.appService.deleteObj(removeObj);
  }

  // advanced

  @Post('mathjs')
  mathjs(@Body() arrayOfObjects: object[]) {
    const [o, formula] = this.appService.mathJS(arrayOfObjects);
    return evaluate(formula, o);
  }
}


