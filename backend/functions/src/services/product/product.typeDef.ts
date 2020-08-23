import { User, ProductShopInventoryLink } from '../services'
import { DataTypes } from "sequelize";

export default {
  id: {
    mysqlOptions: {
      type: DataTypes.INTEGER,
      filterable: true
    }
  },
  name: {
    mysqlOptions: {
      type: DataTypes.STRING,
      addable: true,
      updateable: true
    }
  },
  upc: {
    mysqlOptions: {
      type: DataTypes.STRING,
      unique: true,
      addable: true,
      updateable: true
    }
  },
  image: {
    mysqlOptions: {
      type: DataTypes.STRING,
      addable: true,
      updateable: true
    }
  },
  created_by: {
    __typename: User.__typename,
    mysqlOptions: {
      type: DataTypes.INTEGER,
      addable: true,
      filterable: true,
      joinInfo: {},
    },
  },
  available_in: {
    __typename: ProductShopInventoryLink.__typename,
    resolver: async (context, req, currentObject, query, args, parent) => {
      return ProductShopInventoryLink.paginator.getRecord(req, {
        ...query?.__args,
        product_id: currentObject.id
      }, query);
    }
  }
}