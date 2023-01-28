const handleHttpError = require("../utils/handleError")
const {matchedData} = require("express-validator")
const {usersModel} = require("../models/index")


const getAllUsers = async (req,res) => {
  res.send({})
}

const getUserById = async (req,res) => {

}

const createNewUser = async (req,res) => {
  try{
    const body = matchedData(req)
    const data = await usersModel.create(body)
    res.send({data})
  }catch(e){
    handleHttpError(res, "ERROR_CREATE_User")
    }
}


const updateUser = async (req,res) => {

}

const deleteUser = async (req,res) => {

}

module.exports = {getAllUsers, getUserById, createNewUser, updateUser, deleteUser}
