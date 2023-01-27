const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        lastName:{
            type: Number
        },
        nickName:{
            type: String,
            unique:true
        },
        email:{
            type: String,
            unique:true
        },
        password:{
            type: String
        },
        role:{
            type:["user","admin"],
            default: "user"
        },
        isActived:{
            type: Boolean
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
);
UserScheme.plugin(mongooseDelete,{overrideMethods:"all"})
module.exports = mongoose.model("users", UserScheme)