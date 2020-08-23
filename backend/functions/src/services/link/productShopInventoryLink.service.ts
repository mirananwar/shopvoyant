import Service from '../service';
import errorHelper from '../../helpers/tier0/error';
import mysqlHelper from '../../helpers/tier1/mysql';

import { handleJqlSubscription, handleJqlSubscriptionTrigger, handleJqlSubscriptionTriggerIterative, deleteJqlSubscription } from '../../helpers/tier3/subscription'

import generatePaginatorService from '../generator/paginator.service'

export class ProductShopInventoryLink extends Service {
  static __typename = 'productShopInventoryLink';

  static paginator = generatePaginatorService(ProductShopInventoryLink);

  static presets = {
    default: {
      user: null,
      company: null,
      permissions: null
    }
  };

  static filterFieldsMap = {
    product_id: {
      field: "product",
    },
    shop_id: {
      field: "shop",
    },
    shop_zip: {
      field: "shop",
      foreignField: "address_postal_code"
    },
  };

  static sortFields = ["price", "quantity"];

  static isFilterRequired = true;

  static accessControl = {
    get: () => true,
    update: () => true,
    delete: () => true,
    getMultiple: () => true,
    add: () => true,
  }

  static async upsertRecord(req, args = <any> {}, query?: object) {
    //check for record existence based on keys
    const existingRecords = await mysqlHelper.executeDBQuery("SELECT id FROM productShopInventoryLink WHERE product = :product AND shop = :shop", {
      product: args.product,
      shop: args.shop
    });

    //not exists, execute add
    if(existingRecords.length < 1) {
      return this.addRecord(req, args, query);
    } else {
      //exists, execute update
      return this.updateRecord(req, {
        ...args,
        id: existingRecords[0].id
      }, query);
    }
  }
};

