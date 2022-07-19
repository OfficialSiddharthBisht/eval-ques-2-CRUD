const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/products' , {useNewUrlParser : true});

const db = mongoose.connection
db.on('error',(error)=>{
    console.log(error)
})
db.once('open',()=>{
    console.log('connected to mongodb')
})

app.use(express.json());

const productRouter = require('./routes/products');
app.use('/products',productRouter);

app.listen(port,()=>{
    console.log("Server started at port ", port);
})