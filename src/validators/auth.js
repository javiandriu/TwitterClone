const {check} =require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorRegister = [
  check("name")
  .exists()
  .notEmpty()
  .isLength({min:3, max:99}),
  check("email")
  .exists()
  .notEmpty()
  .isEmail(),
  check("password")
  .exists()
  .notEmpty()
  .isLength({min:3, max:99}),
  (req,res,next) => {
    return validateResults(req,res,next)
  }
];

const validatorLogin = [
  check("nickName")
  .exists()
  .notEmpty()
  .isLength({min:3, max:10}),
  check("email")
  .exists()
  .notEmpty()
  .isEmail(),
  check("password")
  .exists()
  .notEmpty()
  .isLength({min:3, max:15}),
  (req,res,next) => {
    return validateResults(req,res,next)
  }
];

module.exports = {validatorRegister, validatorLogin}
