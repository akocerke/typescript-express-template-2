import { DataTypes, Model } from 'sequelize';
import todoSequelize from '../setup/database';
import { UserAttributes } from '../../interfaces/db-models/UserAttributes';

// Definiere das User Model
class User extends Model<UserAttributes> implements UserAttributes {
  public id?: number;
  public email!: string;
  public name!: string;
  public password!: string;
  public profileImgUrl?: string;

  // Zeitstempel, falls diese in der Datenbank verwendet werden
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImgUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: todoSequelize,
    timestamps: false,
    tableName: 'User',
    defaultScope: { attributes: { exclude: ['password'] } },
    scopes: {
      allData: { attributes: { exclude: [] } },
    },
  },
);

export default User;
