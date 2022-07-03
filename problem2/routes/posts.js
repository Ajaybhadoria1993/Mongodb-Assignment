const express=require('express')
const router=express.Router();
const QuoteSchema=require('../models/Quotesschema')

//get back all the posts

router.post('/add',async(req,res)=>{
    const post=  new QuoteSchema({
        quote:req.body.quote,
        author:req.body.author
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
        const posts=await QuoteSchema.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
    
});


module.exports=router;