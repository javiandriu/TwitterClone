const {storagesModel} =require("../models/index")
const PUBLIC_URL = process.env.PUBLIC_URL


const uploadImage = async (req,res) => {
    const {body,file} = req
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storagesModel.create(fileData)
    res.send({data})

}

module.exports = {uploadImage}