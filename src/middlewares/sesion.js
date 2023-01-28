const {handleHttpError} = require("../utils/handleError")
const {verifyToken} = require("../utils/handleJWT")
const authMiddleware = async (req,res,next) => {
  try{
    if(!req.headers.authorization) {
      handleHttpError(res,"NOT_TOKEN", 401);
      return
    }
    const token = req.headers.authorization.split('').pop();
    const dataToken = await verifyToken()
    if(!dataToken._id){
      handleHttpError(res,"ERROR_ID_TOKEN", 401);
      return
    }
    next()
  }catch(e){
    handleHttpError(res,"NOT_SESSION", 401)
  }
}

module.exports = authMiddleware;