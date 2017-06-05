const express = require('express')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const Translation = require('./modules/Translation')

const app = express( );
app.use( logger('dev') )
app.use( bodyParser.json( ) )
app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( cookieParser( ) )
app.use( Translation )
module.exports = app;
