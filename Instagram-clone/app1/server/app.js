const express = require('express');
const app = express();


const customMiddleware = (req,res,next) => {
    console.log('middleware encountered');
    next();
};

app.use(customMiddleware);


app.get('/',(req,res)=>{
    console.log('home');
    res.send('Hellow World');
});

app.listen(3000,()=> console.log('Server listening on port no. 4000'));