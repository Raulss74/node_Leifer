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


/* const dbConnect = () => {
    const DB_URI = process.env.DB_URI; 
    mongoose.connect(
        DB_URI,
        {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    },
    (err, res) => {
        if(!err){
            console.log('**** CONEXIÓN CORRECTA ****'); 
        } else {
            console.log('**** ERROR DE CONEXIÓN ****'); 
        }
        }
    ); 
}; */

module.exports = dbConnect

