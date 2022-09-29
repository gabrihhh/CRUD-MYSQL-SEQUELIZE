const sequelize = require('sequelize');

const database = require('./db');

const porduto = database.define('Produto',
    {
        id:{
            type: sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        nome:{
            type: sequelize.STRING,
            allowNull:false,
        },
        data:{
            type: sequelize.DATE,
            allowNull:false
        }
    }
)

module.exports = porduto;