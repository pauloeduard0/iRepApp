'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reps.belongsTo(models.Reserva);
    }
  };
  Reps.init({
    name: DataTypes.STRING,
    rua: DataTypes.STRING,
    cidade: DataTypes.STRING,
    cep: DataTypes.STRING,
    bairro: DataTypes.STRING,
    qtdMax: DataTypes.INTEGER,
    repId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reps',
  });
  return Reps;
};