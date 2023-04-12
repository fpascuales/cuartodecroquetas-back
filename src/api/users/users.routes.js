const { login, signUp } = require("./users.controller")
const userRoutes = require("express").Router()

userRoutes.post("/login", login)
userRoutes.post("/", signUp)

module.exports = userRoutes