require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');
let workout = require('./controllers/workOutControllers');
let user = require('./controllers/userControllers');


sequelize.sync();

app.use(require('./middleware/headers'));
app.use(express.json());


app.use('./user', user);


app.use(require('./middleware/validate-session'));
app.use('./workout', workout);





app.listen(3000, function(){
    console.log('app is listing on 3000')
})