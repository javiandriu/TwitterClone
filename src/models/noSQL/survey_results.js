const mongoose = require("mongoose")

const SurveyResultsScheme = new mongoose.Schema(
    {
        results: {
            type: [Number]
        },
        userId:{
            type: mongoose.ObjectId
        },
        tweetId:{
          type: mongoose.ObjectId
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("surveys_results", SurveyResultsScheme)
