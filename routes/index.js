const express = require("express"); 
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname; // proporciona la ruta absoluta donde se encuentra el archivo dentro del equipo. 

const removeExtension = (fileName) => {
    // TODo tracks.js [tracks, js]
    return fileName.split('.').shift()
}

const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file) // TODO users, storage, tracks...
    if(name !== 'index'){
        console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`,require(`./${file}`)) // TODo http://localhsot:3001/api/tracks
    }
})





module.exports = router; 