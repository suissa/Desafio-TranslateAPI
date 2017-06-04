const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/translation')

mongoose.connection.on('error', console.log)

module.exports = mongoose.model('Translation', {
    word: [String] ,
    translateTo: Schema.Types.Mixed
})

//{
//  lang: String,
//  word: String
//}