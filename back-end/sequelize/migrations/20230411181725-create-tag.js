"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tags", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      taskId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Tasks",
          key: "id",
          as: "taskId",
        },
      },
      name: {
        type: Sequelize.STRING,
      },
      mslId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Msls",
          key: "id",
          as: "mslId",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tags");
  },
};
