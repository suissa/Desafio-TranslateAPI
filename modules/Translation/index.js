
const express = require('express')

const app = module.exports = express.Router()

const Translation = require('./model')

const translationQueryToWord = (word) => ( { 'word': { $in: [word] } } )



app.get( '/', ( req, res ) => {

    const {
        word,
        toLanguage,
    } = req.query

    Translation.find( {}, ( err, result ) => { 
        console.log( result )
        if( !err ){ 
            console.log(result)
            res.json( result )
        }
        res.end( )

    } )
})

app.get( '/key', ( req, res ) => {

    const {
        word,
        translateTo,
    } = req.query

    Translation.findOne( { 'word': word , translateTo: { $exists : translateTo } }, ( err, result ) => { 
        if( !err && result ){
            res.json( { [translateTo]: result.translateTo[translateTo]} )
        }
        if( !err && !result ){
            res.json( { message : "Word not found"} )
        }
        if( err ){
            res.err( err )
        }
        res.end( )
    } )
})

app.post( '/key', ( req, res ) => {
    
    const {
        word,
        translateTo,
        toWord
    } = req.body 

    Translation.createTranslation( { word, translateTo, toWord }, (err, result) => {
        res.json( result )
        res.end()
    }
 )

})
