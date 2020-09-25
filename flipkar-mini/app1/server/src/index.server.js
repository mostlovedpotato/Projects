const express =require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const userRoutes = require('./routes/user');

//environment variables
env.config();

//mongodb connection
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true}).then(()=>{
    console.log('Database connected');
});
// app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 

// parse application/json
app.use(bodyParser.json());

app.use('/api',userRoutes);

app.listen(process.env.PORT,()=> console.log(`Server is running on Port no : ${process.env.PORT}`));