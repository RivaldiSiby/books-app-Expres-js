// import express
const express = require("express");

// const mainRouter = require('./src/routes')
const mainRouter = require("./src/routes/index");

// koneksi database 
const db = require("./src/config/db")
// create expores app
const server = express();
const PORT = 8080;


// cek database 
db.connect()
.then(() => {
    console.log("DB Conected")
// pasang router ke server
server.use(mainRouter)
server.listen(PORT, () => {
    console.log(`Server is Running at Port ${PORT}`)
})
})
.catch((err) => console.log(err))




