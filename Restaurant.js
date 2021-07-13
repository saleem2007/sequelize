const {sequelize, DataTypes, Model} = require('./db');

class Restaurant extends Model { }

Restaurant.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    ratings: DataTypes.INTEGER
}, {
    sequelize
    
});

module.exports = { Restaurant };