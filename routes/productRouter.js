const express = require ('express')
const bodyParser = require('body-parser')
const productRouter = express.Router()

productRouter.use(bodyParser.json())

productRouter.route('/')
.all((req,res,next)=>{
    //Usage: app.all(endpoint, callback). 
    //for all REST methods recieved on endpoint do callback 
    
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next();
    //next() => after the above code has been executed for all endpoints, 
    //Look below ad execute the rest method recieved


}).get((req,res,next)=>{
    //app.method(endpoint,callback) if method was gotten, do callback
    // /product end points 
    res.send("will send all the products to you")
}).post((req,res,next)=>{
    res.end("will add the product: " + req.body.name +" with details: "+ req.body.description)
}).put((req,res,next)=>{
    res.statusCode = 403
    res.end("put not supported on /products")
}).delete( (req,res,next)=>{
    res.end("deleting all products!")
})

//handle products/productId
productRouter.route('/:productId')
.get((req,res,next)=>{
    res.send("gettin product: with ID: " + req.params.productId)
}).post((req,res,next)=>{
    res.end("Post not supported on /products/:productid")
}).put((req,res,next)=>{
    res.statusCode = 403
    res.end("updating product with ID: " + req.params.productId)
}).delete( (req,res,next)=>{
    res.end("deleting product with ID: " + req.params.productId)
})

module.exports = productRouter
