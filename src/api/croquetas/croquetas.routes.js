const { isAuth } = require("../../middlewares/auth")
const uploadImage = require("../../middlewares/file")
const { getAllCroquetas, getCroquetasById, createCroqueta, deleteCroqueta, updateCroqueta } = require("./croquetas.controller")

const croquetasRoutes = require("express").Router()

croquetasRoutes.get("/", getAllCroquetas)
croquetasRoutes.get("/:id", getCroquetasById)
croquetasRoutes.post("/", [isAuth], uploadImage.single('image'), createCroqueta)
croquetasRoutes.put("/:id", [isAuth], uploadImage.single('image'), updateCroqueta)
croquetasRoutes.delete("/:id", [isAuth], deleteCroqueta)

module.exports = croquetasRoutes