'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Categoria', 
      'imagen', { 
        type: Sequelize.STRING
      },

    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Categoria');
  }
};
