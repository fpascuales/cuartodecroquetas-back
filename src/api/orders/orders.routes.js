const { isAuth } = require("../../middlewares/auth")
const { getAllOrders, getOrderById, createOrder, getLastOrder, getLastTenOrder } = require("./orders.controller")

const ordersRoutes = require("express").Router()

ordersRoutes.get("/", [isAuth], getAllOrders)
ordersRoutes.get("/last/", getLastOrder)
ordersRoutes.get("/lastten/", [isAuth], getLastTenOrder)
ordersRoutes.get("/:id", [isAuth], getOrderById)
ordersRoutes.post("/", createOrder)

module.exports = ordersRoutes