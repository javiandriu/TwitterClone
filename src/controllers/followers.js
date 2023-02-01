const handleHttpError = require("../utils/handleError")
const {matchedData} = require("express-validator")
const {followersModel} = require("../models/index")

const getFollowersById = async (req,res) => {
  try{
    req = matchedData(req)
    const {followerId} = req
    const followerById = await followersModel.findById(id)
    res.send({followerById})
}catch(e){
    handleHttpError(res, "NOT_FOUND_FOLLOWERS",404)
  }
}

const addFollower = async (req,res) => {
  try{
    const body = matchedData(req)
    const newFollower = await followersModel.create(body)
    res.send(newFollower)
  }catch(e){
    handleHttpError(res, "ERROR_ADD_FOLLOWER")
    }
}


const deleteFollower = async (req,res) => {
  try{
    req = matchedData(req)
    const {id} =req
    const deletedFollower = await followersModel.deleteOne({_id:id})
    res.send({deletedFollower})
}catch(e){
    handleHttpError(res, "ERROR_DELETE_FOLLOWER")
  }
}

const findFollowers = async (req,res) => {
  try{
    const req = matchedData(req)
    const {followerId,userId} = req
    const followersByUser = await followersModel.find(followerId)
    res.send({followersByUser})

  }catch(e){
    handleHttpError(res, "ERROR_FIND_FOLLOWERS")
  }
}

module.exports = {findFollowers}
