const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://testdb:test@cluster0.cdc3z.mongodb.net/userapp?retryWrites=true&w=majority",(err)=>{
    if(!err){
        console.log("DB connection successful");
    }else{
        console.log("Error in connection" + err);
    }
})

module.exports = mongoose;