const express = require("express"); 
const router = express.Router(); 
const uploadMiddleware = require('../utils/handleStorage'); 
const { createItem } = require("../controllers/storage");

// Método poara el envío de archivos 
router.post("/", uploadMiddleware.single("myfile"), createItem);



module.exports = router; 