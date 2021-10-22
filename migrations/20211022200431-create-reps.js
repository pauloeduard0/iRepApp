'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      rua: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      qtdMax: {
        type: Sequelize.INTEGER
      },
      repId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key: 'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Reps');
  }
};