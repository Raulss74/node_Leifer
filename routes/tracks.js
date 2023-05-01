const express = require("express"); 
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol")
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks"); 
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks"); 


// TODO http://localhost/tracks GET, POST, DELETE, PUT

// Obtener detalle de los item
router.get("/", authMiddleware, getItems); 

// Obtener detalle del item
router.get("/:id", authMiddleware, validatorGetItem, getItem); 

// Crear un registro 
router.post("/", authMiddleware, checkRol(['admin']), validatorCreateItem, createItem);  

// Actualizar un registro
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem); 

// Obtener detalle del item 
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem); 


module.exports = router; 
