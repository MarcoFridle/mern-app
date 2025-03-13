const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const port = process.env.PORT || 5000

const corsOptions = {
    origin: "https://localhost:3000",
    mehtods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(require("./routes/record"))
const dbo = require("./db/conn")

app.get("/", function(req, res) {
    res.send("App is running")
})

dbo.connectToMongoDB(function (error) {
    if (error) throw error

    app.listen(port, () => {
        console.log("Server is running on port: " + port)
    })
})