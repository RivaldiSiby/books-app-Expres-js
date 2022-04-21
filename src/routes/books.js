const express = require("express");

const Router = express.Router();
const bookController = require("../controllers/books");

Router.get('/all',bookController.getAllBooks)
Router.get('/1',bookController.getBookById)

module.exports = Router
