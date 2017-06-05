
const express = require('express')
const app = express.Router()

const controller = require('./controller')

for( let route of require('./routes') ){
    app[ route.method ]( route.path, controller[ route.action ] ) 
}

module.exports = app
