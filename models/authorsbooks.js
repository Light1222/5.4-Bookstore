'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AuthorsBooks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AuthorsBooks.init({
    author_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    course_id: {
      type:DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'AuthorsBooks',
    tableName: 'authors_books',
    timestamps: false
  });
  return AuthorsBooks;
};