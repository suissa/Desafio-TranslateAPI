const db = require('../../config/db')
const {Schema} = db

const Model = module.exports = db.model('Translation', {
    word: [String] ,
    translateTo: Schema.Types.Mixed
})

Model.createTranslation = ( { word, translateTo, toWord }, callback ) => {

    Model.findOne( { word } , (err, translation ) => {
        
        translation = translation || { translateTo : {} } 
        translation.translateTo[translateTo] = toWord  

        if( translation.word ){

            for( const wd of [ word, toWord ] ){
                if( translation.word.indexOf( wd ) < 0  ){
                    translation.word = translation.word.concat( wd )
                }
            }
            Model.update( {word}, translation , callback )

        } else {

            translation.word = [ word, toWord ]
            Model.create( translation, callback  )

        }

    } )
}
