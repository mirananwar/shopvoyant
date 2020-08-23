import { Product, Shop } from '../services'

import { DataTypes } from "sequelize";

export default {
  id: {
    mysqlOptions: {
      type: DataTypes.INTEGER,
      filterable: true
    }
  },
  shop: {
    __typename: Shop.__typename,
    mysqlOptions: {
      type: DataTypes.INTEGER,
      addable: true,
      joinInfo: {},
    },
  },
  product: {
    __typename: Product.__typename,
    mysqlOptions: {
      type: DataTypes.INTEGER,
      addable: true,
      joinInfo: {},
    },
  },
  quantity: {
    mysqlOptions: {
      type: DataTypes.INTEGER,
      addable: true,
      updateable: true,
    }
  },
  price: {
    mysqlOptions: {
      type: DataTypes.INTEGER,
      addable: true,
      updateable: true,
    }
  },
  date_created: {
    fn: (field) => "UNIX_TIMESTAMP(" + field + ")",
    mysqlOptions: {
      type: DataTypes.DATE,
      addable: true,
      updateable: true
    }
  },
  date_modified: {
    fn: (field) => "UNIX_TIMESTAMP(" + field + ")",
    mysqlOptions: {
      type: DataTypes.DATE,
      updateable: true
    }
  },
};