const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
/**
 * Debes de pasar el objeto del usuario
 * @param {*} user
 */
const tokenSign = async (user) => {
  const sign = jwt.sign(
    {
      _id:user._id,
      role: user.role
    },
    JWT_SECRET,
    {
      expires: "2h"
    }
  );
  return sign
}
/**
 * Debes de pasar el token de sesion el JWT
 * @param {*} tokenJWT
 */

const verifyToken = async (tokenJWT) => {
  try{
    return jwt.verify(tokenJWT, JWT_SECRET)
  }catch(e){
    return null

  }
}

module.exports = {tokenSign, verifyToken}
