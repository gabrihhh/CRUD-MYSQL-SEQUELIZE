const sequelize = require('sequelize');

const componenteSequelize = new sequelize('dbProduto','root','',
{
    dialect:'mysql',host:'localhost'
});

module.exports = componenteSequelize;