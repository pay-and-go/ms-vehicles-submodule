'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  vehicle.init({
    iduser: DataTypes.INTEGER,
    placa: DataTypes.STRING,
    marca: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vehicle',
  });
  return vehicle;
};