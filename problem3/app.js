const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const app=express()
require('dotenv/config')
app.use(bodyparser.json())



//imports Routes
const postRoute=require("./routes/posts")
app.use('/product',postRoute)

//Routes
app.get('/',(req,res)=>{
    res.send("HELLO I AM HOMEPAGE OF THIS WEBSITE")
})

//connect to db
mongoose.connect(process.env.DB_connection,()=>{
    console.log("connect to MONGO-DB");
})

app.listen(3000);