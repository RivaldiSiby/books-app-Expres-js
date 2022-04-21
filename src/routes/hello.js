const  Router = require("express").Router();

Router.get("/",(req,res)  => {
    res.json({
        msg:"response hello berhasil diterima"
    });
})
Router.post("/",(req,res)  => {
    res.json({
        msg:"response post diterima"
    });
})
Router.patch("/",(req,res)  => {
    res.json({
        msg:"response patch diterima"
    });
})

module.exports = Router;