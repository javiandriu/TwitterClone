const {check } =require("express-validator")
const validateResults = require("../utils/handleValidator")


const validatorCreateUser = [
  check("name").exists().notEmpty(),
  check("lastName").exists().notEmpty(),
  check("nickName").exists().notEmpty(),
  check("age").exists().notEmpty(),
  check("email").exists().notEmpty().isEmail(),
  check("password").exists().notEmpty().isLength({min:3, max: 12}),
  check("isActive").exists().notEmpty().isBoolean(),
    (req,res,next) => {
        return validateResults(req,res,next)
    }
];

const validatorGetUser = [
  check("id").exists().notEmpty().isMongoId(),
  (req,res,next) => {
      return validateResults(req,res,next)
  }
];

const validatorUpdateUser = [
  check("name").notEmpty(),
  check("lastName").notEmpty(),
  check("nickName").notEmpty(),
  check("age").notEmpty(),
    (req,res,next) => {
        return validateResults(req,res,next)
    }
];

module.exports = {validatorCreateUser,validatorGetUser,validatorUpdateUser}
