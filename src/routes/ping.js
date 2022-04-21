const  Router = require("express").Router();

// endpoint
Router.get("/",(req,res)  => {
    res.json({
        msg:"response berhasil diterima"
    });
})

module.exports = Router;