const multer = require("multer")
const imageExtensionTYpe = ['image/']
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        if(file.mimetype === 'image/jpeg'|| file.mimetype === 'image/png'){
            const pathStorage = `${__dirname}/../storage/images`;
            cb(null, pathStorage)
        }else if(file.mimetype === 'video/mp4'){
            const pathStorage = `${__dirname}/../storage/videos`;
            cb(null, pathStorage)
        }else {
            cb({ error: 'Mime type not supported' })
        }    
    },

    filename:function(req, file, cb){
        const  ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`
        cb(null, filename)
    }
})

const uploadMiddleware = multer({storage})

module.exports = {uploadMiddleware};