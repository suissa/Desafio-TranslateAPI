
const express = require('express')
const app = express.Router()

const controller = require('./controller')

const { routes } = require('./config')

for( let route of routes ){
    app[ route.method ]( route.path, controller[ route.action ] ) 
}

module.exports = app
