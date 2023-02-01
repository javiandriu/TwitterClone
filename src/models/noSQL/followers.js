const mongoose = require("mongoose")

const FollowersScheme = new mongoose.Schema(
    {
        userId: {
            type: mongoose.ObjectId
        },
        followerId:{
          type: mongoose.ObjectId
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("followers", FollowersScheme)
