'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reserva.belongsTo(models.User);
      Reserva.hasOne(models.Reps);
    }
  };
  Reserva.init({
    name: DataTypes.STRING,
    reservaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reserva',
  });
  return Reserva;
};