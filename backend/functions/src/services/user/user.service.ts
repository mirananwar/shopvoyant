import Service from '../service'
import generatePaginatorService from '../generator/paginator.service'
import generateAccessorService from '../generator/accessor.service'

import * as permissionsHelper from '../../helpers/tier2/permissions'

export class User extends Service {
  static __typename = 'user';

  static paginator = generatePaginatorService(User);

  static accessor = generateAccessorService(User)

  static presets = {
    default: {
      id: null,
      uid: null,
      email: null,
      display_name: null,
      display_image: null,
      date_created: null,
      date_modified: null
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

  static accessControl = {
    get: permissionsHelper.generateCreatedByUser(User),

    getMultiple: (req, args, query) => {
      //check if logged in
      if(!req.user) return false;

      //anyone can, but they have to use certain filters, like created_by = current user
      if(args.created_by !== req.user.id) return false;

      return true;
    },

    add: (req, args, query) => {
      //nobody can -- needs to be created thru system
      return false;
  
      //allow if permissionsLink (between user and this item) exists (can also check if some fields on there > some number)
    },

    update: permissionsHelper.generateCreatedByUser(User),

    delete: permissionsHelper.generateCreatedByUser(User),
  }
};