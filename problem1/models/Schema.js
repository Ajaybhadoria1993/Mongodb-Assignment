const mongoose=require('mongoose')

const studentSchema=mongoose.Schema({
    studentfirstname:String,
    collagename:String,
    loaction:String
})


module.exports=mongoose.model('Assignment',studentSchema)