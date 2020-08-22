import Service from '../service';
import generatePaginatorService from '../generator/paginator.service'

export class Shop extends Service {
  static __typename = 'shop';
  static paginator = generatePaginatorService(Shop);

  static presets = {
    default: {
      id: null,
      name: null,
      created_by: null
    }
  };

  static filterFieldsMap = {
    id: {
      field: "id",
    },
    created_by: {
      field: "created_by",
    },
    "created_by.name": {
      field: "created_by",
      foreignField: "name"
    }
  };

  static isFilterRequired = false;

  static searchableFields = ["name"];

  static sortFields = ["id", "created_by"];
};