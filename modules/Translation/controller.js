
const Model = require('./model')

const getTranslation = ( req, res ) => {

    const {
        word,
        translateTo,
    } = req.query

    Model.findOne( { 'word': word , translateTo: { $exists : translateTo } }, ( err, result ) => { 
        if( !err && result ){
            res.json( { 'translated': result.translateTo[translateTo]} )
        }
        if( !err && !result ){
            res.json( { message : "Word not found"} )
        }
        if( err ){
            res.err( err )
        }
        res.end( )
    } )
} 

const createTranslation = ( req, res ) => {
    
    const {
        word,
        translateTo,
        toWord
    } = req.body 

    Model.createTranslation( { word, translateTo, toWord }, ( err, result ) => {
        res.json( result )
        res.end( )
    } )

}

const getAll = ( req, res ) => {

    const {
        word,
        toLanguage,
    } = req.query

    Model.find( {}, ( err, result ) => { 
        if( !err ){ 
            res.json( result )
        }
        res.end( )
    } )
}

module.exports = {
    getTranslation,
    createTranslation,
    getAll
}