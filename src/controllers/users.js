const handleHttpError = require("../utils/handleError")
const {matchedData} = require("express-validator")
const {usersModel} = require("../models/index")


const getAllUsers = async (req,res) => {
  try{
    const users = await usersModel.find({})
    res.send({users})
}catch(e){
    handleHttpError(res, "ERROR_GET_USER", 404)
}
}

const getUserById = async (req,res) => {
  try{
    req = matchedData(req)
    const {id} = req
    const userById = await usersModel.findById(id)
    res.send({userById})
}catch(e){
    handleHttpError(res, "NOT_FOUND_USER",404)
  }
}

const createNewUser = async (req,res) => {
  try{
    const body = matchedData(req)
    const newUser = await usersModel.create(body)
    newUser.password = undefined
    res.send(newUser)
  }catch(e){
    handleHttpError(res, "ERROR_CREATE_USER")
    }
}


const updateUser = async (req,res) => {
  try{
    const {id, ...body} = matchedData(req)
    const updatedUser= await usersModel.findOneAndUpdate(id,body,{
      new: true
    })
    res.send({updatedUser})
  }catch(e){
    handleHttpError(res, "ERROR_UPDATE_USER")
  }
}

const deleteUser = async (req,res) => {
  try{
    req = matchedData(req)
    const {id} =req
    const deletedUser = await usersModel.deleteOne({_id:id})
    res.send({deletedUser})
}catch(e){
    handleHttpError(res, "ERROR_DELETE_USER")
  }
}

module.exports = {getAllUsers, getUserById, createNewUser, updateUser, deleteUser}
