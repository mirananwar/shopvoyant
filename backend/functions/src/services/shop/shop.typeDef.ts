import { User } from '../services'
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
  image: {
    mysqlOptions: {
      type: DataTypes.STRING,
      addable: true,
      updateable: true
    }
  },
  address_line_1: {
    mysqlOptions: {
      type: DataTypes.STRING,
      addable: true,
      updateable: true
    }
  },
  address_line_2: {
    mysqlOptions: {
      type: DataTypes.STRING,
      addable: true,
      updateable: true
    }
  },
  address_city: {
    mysqlOptions: {
      type: DataTypes.STRING,
      addable: true,
      updateable: true
    }
  },
  address_state: {
    mysqlOptions: {
      type: DataTypes.STRING,
      addable: true,
      updateable: true
    }
  },
  address_postal_code: {
    mysqlOptions: {
      type: DataTypes.STRING,
      addable: true,
      updateable: true
    }
  },
  address_country: {
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
}