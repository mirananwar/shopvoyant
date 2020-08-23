import Service from '../service';
import generatePaginatorService from '../generator/paginator.service'

import errorHelper from '../../helpers/tier0/error';
import resolverHelper from '../../helpers/tier2/resolver';

import { handleJqlSubscriptionTriggerIterative } from '../../helpers/tier3/subscription'

export class Product extends Service {
  static __typename = 'product';
  static paginator = generatePaginatorService(Product);

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
    upc: {
      field: "upc"
    },
    "created_by.name": {
      field: "created_by",
      foreignField: "name"
    }
  };

  static isFilterRequired = false;

  static searchableFields = ["name", "upc"];

  static sortFields = ["id", "created_by"];
};