const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model("User");
const bcrypt = require('bcryptjs');

router.get('/',(req,res)=>{
    res.send('hello');
});

router.post('/signup', (req,res)=> {
    const {name,email,password} =  (req.body);
    if(!email || !name || !password) {
        return res.status(422).json({
            error:'Error occured Please insert all the fields',
        })
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({message:"user already registred email"});
        }
        bcrypt.hash(password,12)
        .then(hashedPassword=>{
            const user = new User({
                name,
                email,
                password:hashedPassword,
            })
            user.save()
            .then(user=> {
                res.json({message:"user registered successfully"});
            })
            .catch(err=>{
                console.log(err);
            })
        })
        })
        .catch(err=>{
            console.log(err);
        })
        
});

router.post('/signin',(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password) {
        return res.status(422).json({
            message:"hey there this is not good man"
        })    
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.status(422).json({
                message:"pls register"
            })
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                res.json({message:"successfully logged in"})
            }
            else {
                return res.status(422).json({error:"Invalid pass or email"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports =router;