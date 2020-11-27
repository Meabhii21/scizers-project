var mongoose= require("mongoose");

var userSchema = new mongoose.Schema({
    name:String,
    number:String 
});

module.exports=mongoose.model("User",userSchema);