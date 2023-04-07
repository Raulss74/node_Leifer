const mongoose = require('mongoose'); 

const dbConnect = async() => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.DB_URI)
        console.log('**** CONEXIÓN CORRECTA ****')
    } catch(error) {
        console.log('**** ERROR DE CONEXIÓN ****')
        process.exit() 
    }
}

module.exports = dbConnect

