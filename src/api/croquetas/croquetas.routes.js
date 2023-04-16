const { isAuth } = require("../../middlewares/auth")
const { getAllCroquetas, getCroquetasById, createCroqueta, deleteCroqueta, updateCroqueta } = require("./croquetas.controller")

const croquetasRoutes = require("express").Router()

croquetasRoutes.get("/", getAllCroquetas)
croquetasRoutes.get("/:id", getCroquetasById)
croquetasRoutes.post("/", [isAuth], createCroqueta)
croquetasRoutes.put("/", [isAuth], updateCroqueta)
croquetasRoutes.delete("/:id", [isAuth], deleteCroqueta)

module.exports = croquetasRoutes