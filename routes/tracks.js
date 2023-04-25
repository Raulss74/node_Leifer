const express = require("express"); 
const router = express.Router();
const authMiddleware = require("../middleware/session");
const { validatorCreateItem } = require("../validators/tracks"); 
const { getItems, getItem, createItem } = require("../controllers/tracks"); 


// TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", authMiddleware, getItems); 

router.post("/", validatorCreateItem, createItem);  





module.exports = router; 
