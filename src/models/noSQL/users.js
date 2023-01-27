const mongoose = require("mongoose")

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        lastName:{
            type: String
        },
        nickName:{
            type: String,
            unique:true
        },
        age:{
          type: Number
      },
        email:{
            type: String,
            unique:true
        },
        password:{
            type: String,
            select: false
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

module.exports = mongoose.model("users", UserScheme)
