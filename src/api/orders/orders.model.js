const mongoose = require("mongoose")

const orderCroquetaSchema = new mongoose.Schema(
    {
        croqueta: {type: mongoose.Types.ObjectId, ref: "croquetas"},
        quantity: {type: Number, required: true},
        subtotal: {type: Number, required: true}
    },
    {
        timestamps: true
    }
)

const orderSchema = new mongoose.Schema(
    {
        orderCroqueta: [orderCroquetaSchema],
        total: {type: Number, required: true},
        date: {type: String, required: true},
        time: {type: String, required: true}
    },
    {
        timestamps: true,
        collection: "orders"
    }
)

const Order = mongoose.model("orders", orderSchema)
module.exports = Order