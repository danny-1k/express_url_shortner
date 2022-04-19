const express = require('express');
const mongoose = require('mongoose');
const LinkModel = require('./models/link');


mongoose.connect('mongodb://localhost:27017/url_shortner')
.then(()=>{
    console.log('connected to database successfully.');
})
.catch((err)=>{
    console.log(`An error occurred -> ${err}`);
});

const app = express();

app.set('view engine','ejs');
// app.set('view','views')
app.use(express.static('static'));


app.listen(3000,
    ()=>console.log('Server started, listening on port 3000.')
);




app.get('/',(req,res)=>{
    res.render('index');
})
