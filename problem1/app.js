const express=require('express') //we import the package
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
require('dotenv/config')
const app=express()// and execute the package 
app.use(bodyparser.json())
//imports Routes

const postRoute=require('./routes/posts')

app.use('/posts',postRoute)//use as a middleware

//Routes
app.get('/',(req,res)=>{
    res.send("home")
})



//connect to DB
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("connect to MONGO-DB");
})



//we start listening to the server
app.listen(3000);