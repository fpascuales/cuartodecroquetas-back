const { getAllCroquetas, getCroquetasById, createCroqueta } = require("./croquetas.controller")

const croquetasRoutes = require("express").Router()

croquetasRoutes.get("/", getAllCroquetas)
croquetasRoutes.get("/:id", getCroquetasById)
croquetasRoutes.post("/", createCroqueta)

module.exports = croquetasRoutes