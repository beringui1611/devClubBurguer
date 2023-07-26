'use strict';

const { query } = require("express");


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'offer', {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      asllowNull:false,
 })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface,removeColumn('products','offer')

  },
};
