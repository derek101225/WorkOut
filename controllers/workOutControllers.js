let express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session');
let WorkOut = require('../db').import('../models/workout')


router.get('/practice', validateSession, function(req, res)
{
    res.send('hey!! this is a practice route')
})



module.exports = router;