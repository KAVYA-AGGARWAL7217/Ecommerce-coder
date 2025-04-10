const fs=require('fs')
const index=fs.readFileSync('index.html','utf-8');
//the data is string so convert to json
const path=require('path')
const data=JSON.parse(fs.readFileSync(path.resolve(__dirname,'data.json'),'utf-8'))
const users=data.users;


exports.createProduct=(req,res)=>{
    users.push(req.body)
    res.status(201).json(req.body);
}


exports.getAllProducts=(req,res)=>{
    res.json(users)
}

exports.getProduct=(req,res)=>{
    const id=+req.params.id;
    let product=users.find(p=>p.id===id)
    res.json(product)
}


exports.replace=(req,res)=>{
    const id=+req.params.id;
    const productIndex=users.find(p=>p.id===id)
    users.splice(productIndex,1,{...req.body,id:id})
    res.status(201).json(users);
}



exports.updateProduct=(req,res)=>{
    const id=+req.params.id;
    const productIndex=users.find(p=>p.id===id)
    let product=users[productIndex];
    users.splice(productIndex,1,{...product,...req.body})
    res.status(201).json(users);
}



exports.deleteProduct=(req,res)=>{
    const id=+req.params.id;
    const productIndex=users.find(p=>p.id===id)
    let product=users[productIndex];
    users.splice(productIndex,1);
    res.status(201).json(product);
}


