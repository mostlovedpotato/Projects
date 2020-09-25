const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./models/user');



// support parsing of application/json type post data
app.use(express.json());


app.use(require('./routes/auth'));


mongoose.connect("mongodb://localhost:27017/insta",{useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true}).then(()=>{
    console.log('Mongooose connected to the database');
});

app.use(require('./routes/auth'));

app.listen(3000,()=> console.log('Server listening on port no. 4000'));