const handleHttpError = require("../utils/handleError")
const {matchedData} = require("express-validator")
const {followersModel,usersModel} = require("../models/index")



const addNewFollower = async (req,res) => {
  try{
    const {followerId} = matchedData(req)
    const {userId}= req
    const follower = await usersModel.findById(followerId)
    if(!follower ){
      handleHttpError(res, "FOLLOWER_NOT_FOUND")
    }else if(followerId === userId) {
      handleHttpError(res, "FOLLOWER ID MUST NOT BE EQUAL TO USER ID")
    }else{
      const newFollower = await followersModel.create({
        followerId,
        userId
      })
      res.send(newFollower)
    }
  }catch(e){
    handleHttpError(res, e.message)
    }
}

const getFollowersByUser= async (req,res) => {
  try{
    req = matchedData(req)
    const {id} = req
    const followers = await followersModel.find({userId:id}).select('followerId -_id')
    const followersId = followers.map(item => item.followerId)

    const users = await usersModel.find({_id: {$in: followersId}}).select('nickName')
    res.send({followers: users})

  }catch(e){
    handleHttpError(res, "ERROR FIND ALL THE FOLLOWERS")
  }
}

const getFollowingsByUser= async (req,res) => {
  try{
    req = matchedData(req)
    const {id} = req
    const followings = await followersModel.find({followerId:id}).select('userId -_id')
    const followingsId = followings.map(item => item.userId)
    const users = await usersModel.find({_id: {$in: followingsId}}).select('nickName')
    res.send({followings: users})

  }catch(e){
    handleHttpError(res, "ERROR FIND ALL THE FOLLOWINGS")
  }
}

const unFollower = async (req,res) => {
  try{
  req = matchedData(req)
  const {id, followsId}= req
  const collectionId = await followersModel.find({userId:id,followerId:followsId})
  if (!collectionId.length){
    handleHttpError(res, "THE FOLLOWER THAT WANT TO DELETE WAS DELETED BEFORE")
  }else {
    const deletedFollower=  await followersModel.deleteOne({userId:id,followerId:followsId})
    res.send("THE FOLLOWER WAS DELETED SUCCESSFULY")
  }

}catch(e){
    handleHttpError(res, "ERROR_DELETE_FOLLOWER")
  }
}





module.exports = {addNewFollower, getFollowersByUser, getFollowingsByUser,unFollower}
