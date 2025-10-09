const mongoose=require('mongoose');
const userSchema=mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
        unique:false
    },
    mail:{
        type:String,
       required:true,
         unique:true
    },
    description:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:false,
        minlength:6
    }


},
    
    
    {
        timestamps:true

    }


);

const User=mongoose.model('User',userSchema);
module.exports=User;