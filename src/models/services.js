const mongoose = require('mongoose');
const serviceSchema = mongoose.Schema(
    {
    name:{
        type:String,
        required:true,
        unique:true,
    },
    price:{
        type:Number,
       required:true,
    },
    description:{
        type:String,
        required:true,
    }
  

},
    
    
    {
        timestamps:true

    }


);

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;

