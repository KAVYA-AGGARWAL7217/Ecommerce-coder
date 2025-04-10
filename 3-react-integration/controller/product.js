const fs=require('fs')
const model=require('../model/product');
const { default: mongoose } = require('mongoose');
const Product=model.Product;
exports.createProduct=async(req,res)=>{
    const product=new Product(req.body);
    
    try {
        const doc = await product.save();
        console.log({ err: null, doc }); // Indicate no error
        res.status(201).json(req.body);
    } catch (err) {
        console.error({ err, doc: null }); // Log the error
        res.status(500).json({ error: 'Failed to save product' }); // Send an error response
    }
}


exports.getAllProducts=async(req,res)=>{
    const products=await Product.find()
    res.json(products)
}

exports.getProduct=async(req,res)=>{
    const id=req.params.id;
    const products=await Product.findById(id);
    res.json(products)
}


exports.replace=async(req,res)=>{
    const id=req.params.id;
    const doc=await Product.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc);
}



exports.updateProduct=async(req,res)=>{
    const id=req.params.id;
    try{
        const doc=await Product.findOneAndUpdate({_id:id},req.body,{new:true})
        res.status(201).json(doc);

    }
    catch(err)
    {
        console.log(err);
        res.status(400).json(err);
    }
}



exports.deleteProduct=async(req,res)=>{
    const id=req.params.id;
    try{
        const doc=await Product.findOneAndDelete({_id:id})
        res.status(201).json(doc);

    }
    catch(err)
    {
        console.log(err);
        res.status(400).json(err);
    }
}


