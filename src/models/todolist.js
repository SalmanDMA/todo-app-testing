const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TodoList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TodoList.belongsTo(models.User, { foreignKey: 'userId', constraints: false });
    }
  }
  TodoList.init({
    task: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    class: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TodoList',
  });
  return TodoList;
};
