const bcryptjs = require("bcryptjs")

//Contraseña sin encriptar (ejemplo): HolaMundo.01
// Con esta función obtendremos la contraseña encriptada
const encrypt = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash
}

//Pasar contraseña sin encriptar y contraseña encriptada
// Con esta función se comparan los textos para desencriptar
const compare = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
}



module.exports = { encrypt, compare }; 