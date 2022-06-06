import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";
import { sequelize } from "./index";

export class Log extends Model<
  InferAttributes<Log>,
  InferCreationAttributes<Log>
> {
  declare id: CreationOptional<number>;

  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare company: string;
  declare invoiceId: string;
  declare successfully: boolean;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}
Log.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    firstName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    lastName: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    company: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    invoiceId: {
      type: new DataTypes.UUIDV4(),
      allowNull: true,
    },
    successfully: {
      type: new DataTypes.BOOLEAN(),
      allowNull: false,
    },

    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    tableName: "Logs",
    sequelize,
  }
);
