const mongoose = require("mongoose")

const FollowersScheme = new mongoose.Schema(
    {
        userId: {
            type: mongoose.ObjectId,
            required:true,
            index:true
        },
        followerId:{
          type: mongoose.ObjectId,
          required:true,
          index:true
        }
    },
    
    {
        timestamps:true,
        versionKey:false
    }
);

FollowersScheme.index({ userId: 1, followerId: 1 }, { unique: true })
module.exports = mongoose.model("followers", FollowersScheme)
