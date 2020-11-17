module.exports = (sequelize, DataTypes) => {
    const Workout = sequelize.define('Workout', {
        description: {
            type: DataTypes.STRING,
            allowNull: false
            }, 
        definition: {
            type: DataTypes.STRING,
            allowNull: false 
            },
        result: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.INTEGER
        }
    })
    return Workout;
};