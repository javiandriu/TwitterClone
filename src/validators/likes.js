const {check } =require("express-validator")
const validateResults = require("../utils/handleValidator")



const validatorLike= [
  check("id").exists().notEmpty().isMongoId(),
  (req,res,next) => {
      return validateResults(req,res,next)
  }
];

const validatorDislike= [
  check("id").exists().notEmpty().isMongoId(),
  check("likeId").exists().notEmpty().isMongoId(),
  (req,res,next) => {
      return validateResults(req,res,next)
  }
];

module.exports = {validatorLike, validatorDislike}
