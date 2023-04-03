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

module.exports = {
    getAllCroquetas,
    getCroquetasById
}