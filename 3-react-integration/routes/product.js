const express = require('express');
const productController=require('../controller/product')
const router=express.Router();

console.log(productController.createProduct)
router
.post('/',productController.createProduct)
//Products
//read GET /products
.get('/',productController.getAllProducts)
//reade GET /products/:id
.get('/:id',productController.getProduct)
//update Read PUT /products/:id
.put('/:id',productController.replace)

//update patch /products/:id
//in patch yeh properties modified ho jayengi bski vasi ki vasi rahengi
.patch('/:id',productController.updateProduct)

//delete /products/:id
.delete('/:id',productController.deleteProduct)

.get('/',(req,res)=>{
    res.send("<h1>hello</h1>")
})

exports.router=router;