const express = require('express');
const router = express.Router();
const {signup} = require('../controller/user');


router.post('/signin',(req,res)=> {
    
});

router.post('/singup',signup);

module.exports = router;