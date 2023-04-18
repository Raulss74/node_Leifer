const express = require("express"); 
const router = express.Router();
const customHeader = require("../middleware/customHeader");
const { validatorCreateItem } = require("../validators/tracks"); 
const { getItems, getItem, createItem } = require("../controllers/tracks"); 


// TODO http://localhost/tracks GET, POST, DELETE, PUT

router.get("/", getItems); 

router.post("/", validatorCreateItem, createItem);  





module.exports = router; 
