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
            return res.status(404).json({ message: 'La freidora está vacía, no tenemos pedido para servir.'})
        }
        return res.status(200).json(order)
    } catch (error) {
        return next(error)
    }
}
const getLastOrder = async (req, res, next) => {
    try {
        const order = await Order.findOne({}, {}, { sort: { created_at: -1 } }).exec();
        if (!order) {
        return res.status(404).json({ message: 'No hay ningún pedido de croquetas' });
        }
    return res.status(200).json(order);
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
    getLastOrder,
    createOrder
}