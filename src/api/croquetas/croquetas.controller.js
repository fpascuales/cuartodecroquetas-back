const Croqueta = require("./croquetas.model")

const getAllCroquetas = async (req, res, next) => {
    try {
        const croquetas = await Croqueta.find()
        console.log(`Obtenidas todas las croquetas: ${croquetas}`);
        return res.status(200).json(croquetas)
    } catch (error) {
        return next(error)
    }
}
const getCroquetasById = async (req, res, next) => {
    try {
        const { id } = req.params
        const croqueta = await Croqueta.findById(id)
        if(!croqueta){
            return res.json("Alguien se comió la croqueta, busca otra.")
        }
        return res.status(200).json(croqueta)
    } catch (error) {
        return next(error)
    }
}
const createCroqueta = async (req, res, next) => {
    try {
        const weight = '250gr.'
        const croqueta = new Croqueta({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            price: req.body.price,
            weight: weight,
            units: req.body.units,
            category: req.body.category,
            allergens: [{
                id: req.body.allergens.id,
                type: req.body.allergens.type
            }]
        })
        const savedCroqueta = await croqueta.save();
        return res.status(201).json(savedCroqueta)
    } catch (error) {
        return next(error)
    }
}
module.exports = {
    getAllCroquetas,
    getCroquetasById,
    createCroqueta
}