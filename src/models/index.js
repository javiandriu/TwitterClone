const models = {
    usersModel: require("./noSQL/users"),
    tweetsModel: require("./noSQL/tweets"),
    likesModel: require("./noSQL/likes"),
    surveysModel: require("./noSQL/surveys"),
    followersModel: require("./noSQL/followers"),
    imagesModel: require("./noSQL/images"),
    surveyResultsModel: require("./noSQL/survey_results"),
  }

module.exports = models;
