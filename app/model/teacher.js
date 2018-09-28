/**
 * Created by christy on 2018/9/28.
 */

module.exports = app => {
    const DataTypes = app.Sequelize;

    const Model = app.model.define('teacher', {
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
        tableName: 'teacher'
    });

    Model.associate = function() {
        //    Model.belongsTo(app.model.User, { as: 'operator' });
        //  Model.belongsTo(app.model.Area, { as:'parent_area' });
    }

    return Model;
};
