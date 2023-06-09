const jwt = require("jsonwebtoken"); 
const JWT_SECRET = process.env.JWT_SECRET; 
const getProperties = require("../utils/handlePropertiesEngine"); 


const propertiesKey = getProperties(); 

//Método de firma o generación del token 
/**
 * Debes usar el objeto del usuario
 * @param {*} user 
 */

const tokenSign = async(user) => {
    const sign = jwt.sign(
        {
            [propertiesKey.id]: user[propertiesKey.id], 
            role: user.role
        }, 
            JWT_SECRET,
        {
            expiresIn: "2h",
        }
    );
        return sign; 
};



// Método para verificar token (verificación correcta por el bakend)
/**
 * Debes pasar el token de sesión en el JWT
 * @param {*} tokenJwt
 * @returns 
 */

const verifyToken = async(tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch(e){
        return null 
    }
}

module.exports = {tokenSign, verifyToken};