const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email: {
        type:String,
        require:true,
        trim:true,
    },
    password:{
        type:String,
        require:true,
        trim:true,
    }
});

mongoose.model("User",userSchema);