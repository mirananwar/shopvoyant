import { User } from '../services'

import { DataTypes } from "sequelize";

export default {
  id: {
    mysqlOptions: {
      type: DataTypes.INTEGER,
      filterable: true
    }
  },
  uid: {
    mysqlOptions: {
      type: DataTypes.STRING,
      unique: true,
      addable: true,
      updateable: false
    }
  },
  name: {
    mysqlOptions: {
      type: DataTypes.STRING,
      defaultValue: "John Doe",
      addable: true,
      updateable: true
    }
  },
  email: {
    mysqlOptions: {
      type: DataTypes.STRING,
      unique: true,
      addable: true,
      updateable: true
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
  created_by: {
    __typename: User.__typename,
    mysqlOptions: {
      type: DataTypes.INTEGER,
      addable: true,
      filterable: true,
      joinInfo: {},
    }
  },
}