'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Categoria', 
      'ruta', { 
        type: Sequelize.STRING
      },

    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Categoria');
  }
};
