const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model {}

Post.init(
    {
        post_id: 
        {
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey: true,
            autoIncrement: true,
            
        },

        title: 
        {
            type: DataTypes.STRING
        }







    })