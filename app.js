const express = require('express');

const app = express();

app.set('view-engine','ejs');

app.use(express.static('static'))

app.listen(3000,()=>console.log('Server started, listening on port 3000.'))

app.get('/',(req,res)=>{
    res.send('Index');
})
