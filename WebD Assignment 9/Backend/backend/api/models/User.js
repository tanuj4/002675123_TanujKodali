var mongoose = require("mongoose");

module.exports = mongoose.model("Data",{
    fullname:{type:String, default:""},
    password:{type:String, default:""},
    email:{type:String, default:""}
});