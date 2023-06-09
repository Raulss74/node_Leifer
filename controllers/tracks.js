const { matchedData } = require("express-validator");
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
const getItem = async (req, res) => {
    try{
        req = matchedData(req); 
        const {id} = req; 
        const data = await tracksModel.findOneDetail(id); 
        res.send({ data }); 
    } catch(e){
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}; 

// Crear o insertar un registro 
const createItem = async (req, res) => {
    try {
        const body = matchedData(req);        
        const data = await tracksModel.create(body); 
        res.status(201); 
        res.send({data})
    } catch(e){
        handleHttpError(res, "ERROR_CREATE_ITEMS");
    }    
};

// Actualizar un registro 
const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req); 
        const data = await tracksModel.findOneAndUpdate(
            id, body
        ); 
        res.send({ data });
    } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_ITEMS");
    }
}; 


// Eliminar un registro
const deleteItem = async (req, res) => {
    try {
        req=matchedData(req); 
        const {id} = req; 
        const deleteResponse = await tracksModel.delete({_id:id}); 
        const data = {
            deleted:deleteResponse.matchedCount
        }
        res.send({ data }); 
    } catch (e) {
        console.log(e)
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }
}; 

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };