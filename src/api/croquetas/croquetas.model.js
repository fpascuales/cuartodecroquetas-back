const mongoose = require("mongoose")

const croquetaSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        image: { type: String, required: true},
        description: { type: String, required: true},
        price: { type: Number, required: true},
        units: { type: Number, required: true},
        category: { type: String, required: true, enum: ["Pescado", "Carne", "Verdura", "Queso"]},
        allergens: [
         {
            type: {type: String, required: true, enum: ['Gluten', 'Crustáceos', 'Moluscos', 'Pescado', 'Huevo', 'Altramuces', 'Mostaza', 'Cacahuetes', 'Frutos Secos', 'Soja', 'Sésamo', 'Apio', 'Leche', 'Anhídrido Sulfuroso']}
         }   
        ]
    },
    {
        timestamps: true,
        collection: "croquetas"
    }
)

const Croqueta = mongoose.model("croquetas", croquetaSchema)
module.exports = Croqueta