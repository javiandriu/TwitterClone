const mongoose = require("mongoose")

const TweetScheme = new mongoose.Schema(
    {
        comment: {
            type: String
        },
        image: {
            type: [String]
        },
        gif: {
          type: [String]
        },
        video:{
          type: [String]
        },
        amountLikes: {
          type: Number
        },
        isRetweeted:{
            type: Boolean,
            default: false
        },
        isDeleted:{
          type: Boolean,
          default: false
        },
        userId:{
          type: mongoose.ObjectId,
          required:true
        },
        retweetId:{
            type: mongoose.ObjectId
        },
        surveyId:{
          type: mongoose.ObjectId
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("tweets", TweetScheme)
