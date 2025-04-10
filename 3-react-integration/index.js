require('dotenv').config()
const express = require('express');
const cors=require('cors');
const morgan=require('morgan');
// getting-started.js
const path=require('path');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
    console.log('Database connected')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const productRouter =require('./routes/product')
const userRouter =require('./routes/user')

const server=express();
console.log(process.env.DB_PASSWORD);


server.use(cors());
//Built in middleware


server.use(express.json());



//morgan third party middleware


server.use(morgan('default'));

//express.static ->bbuild in middleware type
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))


server.use('/products',productRouter.router);
server.use('/users',userRouter.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'build','index.html'));
})

//create POST /products


server.listen(process.env.PORT,()=>{
    console.log("server started at",+process.env.PORT)
})
