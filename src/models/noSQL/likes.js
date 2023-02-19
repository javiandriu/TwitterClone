const mongoose = require("mongoose")

const LikeScheme = new mongoose.Schema(
    {
        userId:{
            type: mongoose.ObjectId,
            index:true
        },
        tweetId:{
            type: mongoose.ObjectId,
            index:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);
LikeScheme.index({ userId: 1, tweetId: 1 }, { unique: true })
module.exports = mongoose.model("likes", LikeScheme)
