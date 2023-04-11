const { login } = require("./users.controller")
const userRoutes = require("express").Router()

userRoutes.post("/login", login)

module.exports = userRoutes