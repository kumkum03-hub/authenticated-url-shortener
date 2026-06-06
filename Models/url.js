const mongoose = require("mongoose")

const UrlSchema = mongoose.Schema({

    shortId : {
        type : String,
        unique  : true,
        required : true
    },
    redirectUrl : {
        type : String,
        required : true
    },
    visitHistory : [{timestamp : {
        type : Number
    }}],
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
    }
},
 {timestamps : true}

);

const URL = mongoose.model("url",UrlSchema);

module.exports = URL;