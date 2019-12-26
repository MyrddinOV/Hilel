import { Injectable } from '@nestjs/common';
import { IFormula } from './interface/formula.interface';
import { IParameters } from './interface/formula.interface';

const formula: IFormula = {
  "parameters": [
    {
      "id": 703,
      "validation": {
        "min": 0,
        "max": 100,
        "required": null,
        "readonly": null,
        "params": null
      },
      "default": "10",
      "name": "WF",
      "label": "Waste Factor"
    },
    {
      "id": 702,
      "validation": {
        "min": 0,
        "max": 60,
        "required": null,
        "readonly": null,
        "params": null
      },
      "default": "10",
      "name": "FILL",
      "label": "Cable/Pipe FILL/occupancy FILL"
    },
    {
      "id": 701,
      "validation": {
        "min": null,
        "max": null,
        "required": null,
        "readonly": true,
        "params": null
      },
      "default": "150",
      "name": "T",
      "label": "Seal Thickness"
    },
    {
      "id": 700,
      "validation": {
        "min": null,
        "max": 400,
        "required": null,
        "readonly": null,
        "params": null
      },
      "default": "200",
      "name": "W",
      "label": "Opening Width"
    },
    {
      "id": 698,
      "validation": {
        "min": null,
        "max": 400,
        "required": null,
        "readonly": null,
        "params": null
      },
      "default": "200",
      "name": "H",
      "label": "Opening Height"
    },
    {
      "id": 696,
      "validation": {
        "min": null,
        "max": null,
        "required": null,
        "readonly": null,
        "params": null
      },
      "default": "1",
      "name": "OP",
      "label": "No of Openings"
    }
  ],
  "id": 162,
  "uuid": "a31ebb13-43db-4ed6-ba47-d026fb899c8f",
  "createdAt": "15:30:18.896638+00",
  "updatedAt": "15:30:18.896638+00",
  "name": "rectangular",
  "formula": "round(OP * (H * W * T) / 1000 / 1000 * (100 - FILL) / 100 / 2.1 * (100 + WF) / 100, 1)",
};
@Injectable()
export class AppService {

  getAll(): IFormula {
    return formula;
  }



  getObjById(objId): object {
    return formula.parameters.find(obj => obj.id == objId);
  }

  deleteObjById(objId): string {
    let index = formula.parameters.findIndex((obj) => obj.id == objId);
    formula.parameters.splice(index, 1);
    return `removed object by ID: ${objId}`
  }

  updateObjById(newObj): string {
    let index = formula.parameters.findIndex((obj) => obj.id == newObj.id)
    formula.parameters[index] = newObj
    return `update parameter by ID: ${newObj.id}`
  }

  getMinMax(query): IParameters[] {
    let newObj = formula

    return newObj.parameters.filter(elem => query.max < elem.validation.max && query.min > elem.validation.min)
  }


}
