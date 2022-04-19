const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const {LinkModel} = require('./models/link');


mongoose.connect('mongodb://localhost:27017/url_shortner')
.then(()=>{
    console.log('connected to database successfully.');
})
.catch((err)=>{
    console.log(`An error occurred -> ${err}`);
});

const app = express();

app.set('view engine','ejs');
app.set('views','views');
// app.set('view','views')
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



app.listen(3000,
    ()=>console.log('Server started, listening on port 3000.')
);


app.get('/',(req,res)=>{
    res.render('index',{title:null});
});

app.post('/',(req,res)=>{

    const new_link = new LinkModel({orignialUrl:req.body.originalurl, })
    new_link.save();
    res.send(`added to db ${new_link.generatedUrl}`);
});


app.get('/:short',(req,res)=>{
    LinkModel.findOne({generatedUrl:req.params.short},'orignialUrl clicks',(err,link)=>{
        if (err){
            console.log(err);
            res.redirect('/');
        };

        if (link){
            link.clicks+=1;
            link.save();
            res.redirect(link.orignialUrl);

        };

    });

});

app.get('/link/:short',(req,res)=>{

    LinkModel.findOne({generatedUrl:req.params.short},'orignialUrl generatedUrl time clicks',(err,link)=>{
        if (link){
            console.log(link);

        };

    });

});

app.use((req,res)=>{
    res.redirect('/');
})
