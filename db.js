const Sequelize = require('sequelize');
const sequelize = new Sequelize('WorkOut',
'postgres', '101225', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(function() {
    console.log('Connected to workout postgres datadabse');

}, 
    function(err){
        console.log(err);
    }
);

module.exports = sequelize