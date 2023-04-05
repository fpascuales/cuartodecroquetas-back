const { getAllOrders, getOrderById, createOrder } = require("./orders.controller")

const ordersRoutes = require("express").Router()

ordersRoutes.get("/", getAllOrders)
ordersRoutes.get("/:id", getOrderById)
ordersRoutes.post("/", createOrder)

module.exports = ordersRoutes