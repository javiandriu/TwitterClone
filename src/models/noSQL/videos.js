const mongoose = require("mongoose")

const VideoScheme = new mongoose.Schema(
    {
        videoUrl: {
            type: String
        },
        tweetId:{
            type: mongoose.ObjectId,
            required:true
          }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("videos", VideoScheme)