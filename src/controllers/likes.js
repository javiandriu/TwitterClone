const handleHttpError = require("../utils/handleError")
const { matchedData } = require("express-validator")
const { likesModel,tweetsModel } = require("../models")

const getAllUserGivesLikes = (req,res) => {

}

const like = async(req,res) => {
    try{
        const {id}= matchedData(req)
        const {userId} = req
        const data = await likesModel.create({
            userId,
            tweetId:id
            
        })
        res.send(data)
    }catch(e){
        handleHttpError(res, "ERROR_CAN_NOT_LIKE_TO_THE_TWITTER")
    }
}
    

const dislike = async (req,res) => {
    try{
        const {id,likeId}= matchedData(req)
        const deleteLike= await likesModel.deleteOne({_id:likeId})
        res.send("DISLIKE SUCCESSFULLY")
    }catch(e){
        handleHttpError(res, "ERROR_CAN_NOT_DISLIKE")
      }
}

module.exports = {getAllUserGivesLikes, like, dislike}