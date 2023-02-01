const {check } =require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorGetTweet = [
  check("id").exists().notEmpty().isMongoId(),
  (req,res,next) => {
      return validateResults(req,res,next)
  }
];

const validatorCreateTweet = [
  check("comment").exists().notEmpty().isLength({min:1, max: 250}),
    (req,res,next) => {
        return validateResults(req,res,next)
    }
];

const validatorUpdateTweet = [
  check("comment").exists().notEmpty().isLength({min:1, max: 250}),
    (req,res,next) => {
        return validateResults(req,res,next)
    }
];

module.exports = {validatorGetTweet, validatorCreateTweet, validatorUpdateTweet}
