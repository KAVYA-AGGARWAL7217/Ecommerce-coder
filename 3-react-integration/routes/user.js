const express = require('express');
const userController=require('../controller/user')
const router=express.Router();

router
.post('/',userController.createProduct)
//Products
//read GET /products
.get('/',userController.getAllProducts)
//reade GET /products/:id
.get('/:id',userController.getProduct)
//update Read PUT /products/:id
.put('/:id',userController.replace)

//update patch /products/:id
//in patch yeh properties modified ho jayengi bski vasi ki vasi rahengi
.patch('/:id',userController.updateProduct)

//delete /:id
.delete('/:id',userController.deleteProduct)

.get('/',(req,res)=>{
    res.send("<h1>hello</h1>")
})

exports.router=router;