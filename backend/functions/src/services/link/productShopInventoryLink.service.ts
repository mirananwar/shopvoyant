import Service from '../service';

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

  static isFilterRequired = true;

  static accessControl = {
    get: () => true,
    update: () => true,
    delete: () => true,
    getMultiple: () => true,
    add: () => true,
  }
};

