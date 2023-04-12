const { getAllOrders, getOrderById, createOrder, getLastOrder, getLastTenOrder } = require("./orders.controller")

const ordersRoutes = require("express").Router()

ordersRoutes.get("/", getAllOrders)
ordersRoutes.get("/last/", getLastOrder)
ordersRoutes.get("/lastten/", getLastTenOrder)
ordersRoutes.get("/:id", getOrderById)
ordersRoutes.post("/", createOrder)

module.exports = ordersRoutes