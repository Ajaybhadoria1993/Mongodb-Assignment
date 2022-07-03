const mongoose=require('mongoose')

const quoteSchema=mongoose.Schema({
    quote:String,
    author:String
})

module.exports=mongoose.model('Quote',quoteSchema)