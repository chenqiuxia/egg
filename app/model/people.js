/* indent size: 2 */

module.exports = app => {
    const DataTypes = app.Sequelize;
  
    const Model = app.model.define('people', {
      id: {
        type: DataTypes.INTEGER(11).UNSIGNED.ZEROFILL,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
    }, {
      tableName: 'people'
    });
  
    Model.associate = function() {
    //    Model.belongsTo(app.model.User, { as: 'operator' });
      //  Model.belongsTo(app.model.Area, { as:'parent_area' });
    }
  
    return Model;
  };
  