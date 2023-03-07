'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Authors.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    dob: DataTypes.STRING,
    book_written: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Author',
    timestamps: false,
    tableName: 'authors'
  });
  return Authors;
};