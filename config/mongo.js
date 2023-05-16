const mongoose = require('mongoose'); 

const dbConnect = async() => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(process.env.DB_URI)
        console.log('**** CONEXIÓN CORRECTA EN NOSQL ****')
    } catch(error) {
        console.log('**** ERROR DE CONEXIÓN ****')
        process.exit() 
    }
}

module.exports = dbConnect

