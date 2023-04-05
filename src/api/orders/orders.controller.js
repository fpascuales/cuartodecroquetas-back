const Order = require("./orders.model")

const getAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find()
        return res.status(200).json(orders)
    } catch (error) {
        return next(error)
    }
}
const getOrderById = async (req, res, next) => {
    try {
        const { id } = req.params
        const order = await Order.findById(id)
        if(!order){
            return res.json("La freidora está vacía, no tenemos pedido para servir.")
        }
        return res.status(200).json(order)
    } catch (error) {
        return next(error)
    }
}
const createOrder = async (req, res, next) => {
    try {
        const newOrder = await new Order(req.body)
        await newOrder.save()
        return res.json(newOrder)
    } catch (error) {
        return next(error)        
    }
}

module.exports = {
    getAllOrders,
    getOrderById,
    createOrder
}