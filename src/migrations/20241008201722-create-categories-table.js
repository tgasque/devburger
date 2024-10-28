/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.createTable('Categories', { 
      id: {
        type:  Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,  
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        createdAt:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt:{
          type: Sequelize.DATE,
          allowNull: false,
        }
     });
    
  },

  async down (queryInterface) {
  
    await queryInterface.dropTable('Categories');
   
  }
};
