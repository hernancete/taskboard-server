const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Project extends Sequelize.Model {}

    Project.init({
        name: Sequelize.STRING,
        description: Sequelize.STRING,
    }, {
        sequelize,
        freezeTableName: true,
        tableName: 'Projects',
    });

    return Project;
}
