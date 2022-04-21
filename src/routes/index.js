const  express = require("express")

const Router  = express.Router()

const pingRouter =  require('./ping')
const helloRouter =  require('./hello')
const bookRouter  = require('./books')

Router.use('/ping',pingRouter)
Router.use('/hello',helloRouter)
Router.use('/book',bookRouter)

module.exports  = Router