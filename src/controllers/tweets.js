const handleHttpError = require("../utils/handleError")
const {matchedData} = require("express-validator")
const {tweetsModel} = require("../models/index")



const getTweetById = async (req,res) => {
  try{
    req = matchedData(req)
    const {id} = req
    const tweetById = await tweetsModel.findById(id)
    res.send({tweetById})
  }catch(e){
    handleHttpError(res, "NOT_FOUND_TWEET_BY_ID",404)
  }
}
const getTweetsByUser = async (req,res) => {
  try{
    req = matchedData(req)
    const {userId} = req
    const tweetsByUser = await tweetsModel.find(userId)
    res.send({tweetsByUser})
  }catch(e){
    handleHttpError(res, "NOT_FOUND_TWEET_BY_USER",404)
  }
}

const getCreateTweet = async (req,res) => {
  try{
    console.log(req.userId)
    const body = matchedData(req)
    const {userId} = req
    const newTweet = await tweetsModel.create({
      ...body,
      userId
    })
    res.send({newTweet})
  }catch(e){
    handleHttpError(res, "ERROR_CREATE_NEW_TWEET",404)
  }
}

const updateTweet = async (req,res) => {
  try{
    const {id,...body} =matchedData(req);
    const updatedTweet = await tweetsModel.findOneAndUpdate(id,body,{
      new:true
    })
    res.send({updatedTweet})
  }catch(e){
    handleHttpError(res, "ERROR_UPDATE_TWEET")
  }
}

const deleteTweet = async (req,res) => {
  try{
    req = matchedData(req)
    const {id} = req
    const deletedTweet = await tweetsModel.deleteOne({_id:id})
    res.send({deletedTweet})
  }catch(e){
    handleHttpError(res, "ERROR_DELETE_TWEET")
  }
}

module.exports = {getTweetById, getTweetsByUser, getCreateTweet, updateTweet, deleteTweet}
