const mongoose = require("mongoose")

const SurveyScheme = new mongoose.Schema(
    {
        surveyName: {
            type: String
        },
        surveyOptions:{
            type: [String]
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

module.exports = mongoose.model("surveys", SurveyScheme)
