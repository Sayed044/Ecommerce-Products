const express=require('express');
const router = require("./src/routes/api");
const app=new express();

// Security Middleware Import
const rateLimit= require('express-rate-limit')
const helmet= require('helmet')
const mongoSanitize= require('express-mongo-sanitize')
const xss= require('xss-clean')
const hpp= require('hpp')
const cors= require('cors')
const cookieParser= require('cookie-parser');
const mongoose= require('mongoose');
const path= require('path');

// Database Connection
let URI="mongodb+srv://<username>:<password>@cluster0.6ppavlw.mongodb.net/Ecommerce"
let OPTION={user:'saed',pass:'saed1234',autoIndex:true};
mongoose.connect(URI,OPTION).then((res)=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log(err);
})

// Security Middleware Implement
app.use(cookieParser())
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

// Request Rate Limit
app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({limit:'50mb'}));

// Request Rate Limit
const limiter=rateLimit({windowMs:15*60*1000, max:100});
app.use(limiter)

app.use("/api/v1",router)
app.use(express.static('client/dist'));

// Undefined Route
app.get('*',function (req,res){
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'));
})

module.exports=app;
