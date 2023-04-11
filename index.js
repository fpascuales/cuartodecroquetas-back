require("dotenv").config()
const PORT = process.env.PORT

const croquetasRoutes = require("./src/api/croquetas/croquetas.routes.js")
const ordersRoutes = require("./src/api/orders/orders.routes.js")
const userRoutes = require("./src/api/users/users.routes.js")

const express = require("express")
const server = express()

const cors = require("cors")
const cloudinary = require("cloudinary").v2

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended: true}))

server.use("/croquetas", croquetasRoutes)
server.use("/orders", ordersRoutes)
server.use("/admin", userRoutes)

const db = require("./src/utils/db.js")

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

db.connectDB()

server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || "Error")
})
server.use("*", (req, res, next) => {
    return res.status(404).json("Route not found");
})
server.use("/", (req, res) => {
    res.send("It Works!")
})
server.listen(PORT, () => {
    console.log("Server is running!");
})