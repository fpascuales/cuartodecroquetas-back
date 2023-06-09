const { generateSign } = require("../../utils/jwt");
const User = require("./users.model")
const bcrypt = require("bcrypt")

const login = async (req, res, next) => {
    try{
        const userToLog = await User.findOne({user: req.body.user});
        if(!userToLog){
            return res.status(400).json("Usuario no encontrado");
        }
        if(bcrypt.compareSync(req.body.password, userToLog.password)){
            const token = generateSign(userToLog.id, userToLog.user)
            return res.status(200).json({token, userToLog})
        }
        else{
            return res.status(400).json("Error en la contraseña")
        }
    }
    catch (error) {
        return next(error)
    }
}
module.exports = {
    login
}