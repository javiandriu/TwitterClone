const mongoose = require("mongoose")

const ImageStorageScheme = new mongoose.Schema(
    {
        imageUrl: {
            type: String
        },
        filename: {
            type: String
        },
        tweetId : {
            type: mongoose.ObjectId
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("imageStorage", ImageStorageScheme)