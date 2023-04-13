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
// const getLastOrder = async (req, res, next) => {
//     try {
//         const order = await Order.findOne().sort({createdAt: -1}).exec();
//         if (!order) {
//         return res.status(404).json({ message: 'No hay ningún pedido de croquetas' });
//         }
//     return res.status(200).json(order);
//     } catch (error) {
//         return next(error)
//     }
// }
const getLastOrder = async (req, res, next) => {
    try {
      const order = await Order.findOne().sort({createdAt: -1}).exec();
      return res.status(200).json(order || null); // Devuelve null si no hay ningún pedido
    } catch (error) {
      return next(error)
    }
  }
  

const getLastTenOrder = async (req, res, next) => {
    try {
        const orders = await Order.find().sort({createdAt: -1}).limit(10).exec();
        if (!orders) {
        return res.status(404).json({ message: 'No hay ningún pedido de croquetas' });
        }
    return res.status(200).json(orders);
    } catch (error) {
        return next(error)
    }
}
// const createOrder = async (req, res, next) => {
//     try {
//         const newOrder = await new Order(req.body)
//         await newOrder.save()
//         return res.json(newOrder)
//     } catch (error) {
//         return next(error)        
//     }
// }

const createOrder = async (req, res, next) => {
    try {
        const lastOrder = await Order.findOne().sort({ num: -1 }).exec();
        const newNum = (lastOrder && lastOrder.num) ? lastOrder.num + 1 : 1;

        const order = new Order({
            orderCroqueta: req.body.orderCroqueta,
            total: req.body.total,
            date: req.body.date,
            time: req.body.time,
            num: newNum,
          });
      
          const savedOrder = await order.save();
      
          return res.status(201).json(savedOrder);
        } catch (error) {
          return next(error);
        }
      };

module.exports = {
    getAllOrders,
    getOrderById,
    getLastOrder,
    getLastTenOrder,
    createOrder
}