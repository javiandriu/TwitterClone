require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect= require('./src/config/mongo')
const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT
app.use("/api/auth", require("./src/routes/auth"))
app.use("/api/user", require("./src/routes/users"))
app.use("/api/tweet", require("./src/routes/tweets"))
app.use("/api/follow", require("./src/routes/follows"))

app.listen(port, () => {
    console.log(`Your app is running in http://localhost:${port}`)
})

dbConnect()


