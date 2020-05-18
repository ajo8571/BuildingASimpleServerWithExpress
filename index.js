const express = require('express')
const http = require('http')
const morgan = require('morgan')//morgan helps with console logging
const bodyParser = require('body-parser')
const productRouter = require('./routes/productRouter')

const hostname = 'localhost'
const port = 3000
const app = express()

//app use integrates middle ware with our express server 
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))//get static resources from root/public
app.use("/products", productRouter)//use productRouter as the end point for products 


//set up server 
app.use((req, res, next)=>{
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>')
})
const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})


