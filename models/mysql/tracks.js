const { sequelize}  = require("../config/mysql"); 
const { DataTypes } = require("sequelize"); 

const Tracks = sequelize.define(
    "tracks", 
    {
        name: {
            type: DataTypes.STRING, 
            allowNull: false, 
        }, 
        album: {
            type: DataTypes.NUMBER, 
        }, 
        cover: {
            type: DataTypes.STRING, 
        }, 
        artist_name: {
            type: DataTypes.STRING,
        }, 
        artist_nickname: {
            type: DataTypes.STRING,
        }, 
        artist_nationality: {
            type: DataTypes.STRING,
        }, 
        artist_start: {
            type: DataTypes.INTEGER,
        }, 
        artist_end: {
            type: DataTypes.INTEGER,
        }, 
        mediaId: {
            type: DataTypes.STRING,
        },         
    }, 
    {
        timestamps: true, 
    }
); 

module.exports = Tracks; 

