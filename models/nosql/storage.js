const mongoose = require("mongoose"); 

const StorageScheme = new mongoose.Schema(
    {
        url: {
            type:String,
        }, 
        filename: {
            type:String,
        },         
    }, 
    {
        timestamps:true, // permite generar el createdAt y updateAt
        versionKey: false
    }
); 

module.exports = mongoose.model("storage", StorageScheme); 