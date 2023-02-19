const handleHttpError = require("../utils/handleError")
const { matchedData } = require("express-validator")
const { likesModel,tweetsModel } = require("../models")

const getAllUserGivesLikes = (req,res) => {

}

const like = async(req,res) => {
    let numberLikes = 0
    try{
        const {id}= matchedData(req)
        const {userId} = req
        const tweet = await tweetsModel.findById(id)
        if (!tweet) {
            handleHttpError(res, "THE TWEET ID NOT EXISTS",404)
        }else{
            const data = await likesModel.create({
                userId,
                tweetId:id 
            })
            res.send(data)
            tweet.amountLikes += 1
            tweet.save()
        }
    
    }catch(e){
        handleHttpError(res, "ERROR_CAN_NOT_INCLUDE_LIKE_TO_THE_TWITTER")
    }
}
    

const dislike = async (req,res) => {
    try{
        const {id,likeId}= matchedData(req)
        const tweet = await tweetsModel.findById(id)
        if (!tweet) {
            handleHttpError(res, "THE TWEET ID NOT EXISTS",400)
        }else if (!likeId) {
            handleHttpError(res, "THE LIKE ID NOT EXISTS",400)
        }
        else{
            const deleteLike= await likesModel.deleteOne({_id:likeId})
            res.send("DISLIKE SUCCESSFULLY")
            tweet.amountLikes -= 1
            tweet.save()
        }
        
        
    }catch(e){
        handleHttpError(res, "ERROR_CAN_NOT_DISLIKE")
      }
}

module.exports = {getAllUserGivesLikes, like, dislike}