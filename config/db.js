const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/translation')

mongoose.connection.on('error', console.log)

module.exports = mongoose