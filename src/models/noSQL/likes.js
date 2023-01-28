const mongoose = require("mongoose")

const LikeScheme = new mongoose.Schema(
    {
        userId:{
            type: mongoose.ObjectId
        },
        tweetId:{
            type: mongoose.ObjectId
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("likes", LikeScheme)
