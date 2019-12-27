import { Controller, Get, Param, Delete, Put, Body, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { IFormula } from './interface/formula.interface';
import { IParameters } from './interface/formula.interface';
import { IQueryParams } from './interface/formula.interface';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {

  }

  // получить весь объект

  @Get('/parameter')
  getAll(): IFormula {
    return this.appService.getAll();
  }


// Получить данные по айди

  @Get('/parameter/:id')
  getObjById(@Param('id') findById: number) {
    return this.appService.getObjById(findById);
  }

  // удаление данных по айди

  @Delete('/parameter/:id')
  deleteObjById(@Param('id') findById: number) {
    return this.appService.deleteObjById(findById);
  }

  // обновление данных по айди

  @Put('/parameter/update')
  updateObjById(@Body() updateObj: IParameters) {
    return this.appService.updateObjById(updateObj);
  }

  // фильтр по querry min и max
  
  @Get('find')
  getMinMax(@Query() query: IQueryParams): IParameters[] {
    return this.appService.getMinMax(query.min, query.max);
  }
} 


