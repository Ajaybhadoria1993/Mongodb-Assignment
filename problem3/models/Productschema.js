const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    productName:String,
    price:Number
})

module.exports=mongoose.model('Product',productSchema)