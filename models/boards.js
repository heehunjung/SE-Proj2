'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class boards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  boards.init({
    creator_id: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    passwd: DataTypes.STRING,
    hit: DataTypes.INTEGER,
    image_data: DataTypes.BLOB('long') // 큰 이미지 파일을 저장하기 위해 'long' 사용

  }, {
    sequelize,
    modelName: 'boards',
  });
  return boards;
};