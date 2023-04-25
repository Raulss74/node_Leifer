const { tracksModel } = require('../models'); 
const { handleHttpError } = require('../utils/handleError');


// Obtener lista de la base de datos
const getItems = async (req, res) => {
    try {
        const user = req.user;         
        const data = await tracksModel.find({}); 
        res.send({data, user}); 
    } catch(e) {
        handleHttpError(res, "ERROR_GET_ITEMS"); 
    }    
}; 


// Obtener un detalle
const getItem = (req, res) => {}; 

// Crear o insertar un registro 
const createItem = async (req, res) => {
    const { body } = req
    console.log(body)
    const data = await tracksModel.create(body)
    res.send({data})
};

// Actualizar un registro 
const updateItem = (req, res) => {}; 


// Eliminar un registro
const deleteItem = (req, res) => {}; 



module.exports = { getItems, getItem, createItem, updateItem, deleteItem };