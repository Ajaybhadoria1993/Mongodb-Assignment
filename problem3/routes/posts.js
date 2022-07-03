const express=require('express')
const router=express.Router();
const ProductSchema=require('../models/Productschema')

//get back all the posts

router.post('/add',async(req,res)=>{
    const post=  new ProductSchema({
       productName:req.body.productName,
        price:req.body.price
    })
    try{
        await post.save()
        res.json({"result": "success" })
    }
    catch(err){
        res.json({message:err})
    }
})
router.get('/getAll',async (req,res)=>{
    try{
        const posts=await ProductSchema.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
    
});


module.exports=router;