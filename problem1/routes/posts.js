const express=require('express');
const router=express.Router();
const StudentSchema=require('../models/Schema')


//GET BACK ALL THE POSTS
router.get('/',async (req,res)=>{
    try{
        const posts=await StudentSchema.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
    
});
//SUBMIT A POST
router.post('/',async(req,res)=>{
   const post=new StudentSchema({
    studentfirstname:req.body.studentfirstname,
    collagename:req.body.collagename,
    location:req.body.location
   })
   try{
     await post.save()
   res.json({
    "result": "Success"
   })
   }
catch(err){
res.json({message:err});
}
});

//find post by name

router.get('/getdetails',async(req,res)=>{
    try{
        const findByName=await StudentSchema.find({studentfirstname:req.query.name}).limit(1)
        res.json(findByName)
    }catch(err){
        console.log(err)
    }
    }
   
)


module.exports=router; //exports this router 