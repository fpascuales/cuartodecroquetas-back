const { isAuth } = require("../../middlewares/auth")
const { getAllCroquetas, getCroquetasById, createCroqueta } = require("./croquetas.controller")

const croquetasRoutes = require("express").Router()

croquetasRoutes.get("/", getAllCroquetas)
croquetasRoutes.get("/:id", getCroquetasById)
croquetasRoutes.post("/", [isAuth], createCroqueta)

module.exports = croquetasRoutes