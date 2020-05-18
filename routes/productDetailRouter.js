const express = require ('express')
const bodyParsser = require('body-parser')

const productDetailRouter = express.Router()

productDetailRouter.use(bodyParsser.json())

productDetailRouter.route('/')
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
}).get('/:productId',(req,res,next)=>{
    res.send("will send all the products to you")
}).post('/:productId',(req,res,next)=>{
    res.end("will add the product: " + req.body.name +" with details: "+ req.body.description)
}).put('/:productId',(req,res,next)=>{
    res.statusCode = 403
    res.end("put not supported on /products")
}).delete('/:productId', (req,res,next)=>{
    res.end("deleting all products!")
})
module.exports = dishRouter
