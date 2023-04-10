const { getAllOrders, getOrderById, createOrder, getLastOrder } = require("./orders.controller")

const ordersRoutes = require("express").Router()

ordersRoutes.get("/", getAllOrders)
ordersRoutes.get("/:id", getOrderById)
ordersRoutes.get("/last/", getLastOrder)
ordersRoutes.post("/", createOrder)

module.exports = ordersRoutes