const mongoose = require("mongoose");
const prototypeSchema = mongoose.Schema({
    name:String,
    size:String,
    image:String,
    
   // gender:String,
   // designer:String
})
const prototype = mongoose.model("prototype",prototypeSchema);


module.exports = prototype;
