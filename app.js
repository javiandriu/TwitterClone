require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect= require('./src/config/mongo')
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT
app.use("/api/user", require("./src/routes/users"))

app.listen(port, () => {
    console.log(`Your app is running in http://localhost:${port}`)
})

dbConnect()

