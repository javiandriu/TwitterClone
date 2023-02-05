const {check } =require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorAddFollower = [
    check("followerId").exists().notEmpty().isMongoId(),
    (req,res,next) => {
        return validateResults(req,res,next)
    }
  ];

const validatorGetFollowers = [
    check("id").exists().notEmpty().isMongoId(),
    (req,res,next) => {
        return validateResults(req,res,next)
    }
  ];

  const validatorGetFollowings = [
    check("id").exists().notEmpty().isMongoId(),
    (req,res,next) => {
        return validateResults(req,res,next)
    }
  ];

  const validatorUnfollower= [
    check("id").exists().notEmpty().isMongoId(),
    check("followsId").exists().notEmpty().isMongoId(),
    (req,res,next) => {
        return validateResults(req,res,next)
    }
  ];


module.exports = {validatorAddFollower, validatorGetFollowers, validatorGetFollowings,validatorUnfollower}

