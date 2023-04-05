const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
        croqueta: {type: mongoose.Types.ObjectId, ref: "croquetas"},
        quantity: {type: Number, required: true},
        subtotal: {type: Number, required: true}
    },
    {
        timestamps: true,
        collection: "orders"
    }
)

const Order = mongoose.model("orders", orderSchema)
module.exports = Order