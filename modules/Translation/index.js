
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
        toLanguage,
    } = req.query

    console.log(req.query)

    Translation.findOne( { 'word': { $in : [word] }  }, ( err, result ) => { 
        if( !err && result ){ 
            console.log(result.translateTo, toLanguage) 
            res.json( { [toLanguage]: result.translateTo[toLanguage]} )
        }
        if( !err && !result ){
            res.json( { message : "Word not found"} )
        }
        res.end( )
    } )
})

app.post( '/key', ( req, res ) => {
    let {word} = req.body

    const {
        translateTo,
        toWord
    } = req.body 

    const create = { 
            word: [word, toWord], 
            translateTo: { [translateTo]: toWord } 
    }

    // Translation.update( query, mod,  (err, result) => {
    //     console.log(err);
    //     res.json( result )
    //     res.end()
    // } )

    Translation.create( create,  (err, result) => {
        console.log(err);
        res.json( result )
        res.end()
    } )
})
