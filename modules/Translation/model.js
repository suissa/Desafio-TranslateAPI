const mongoose = require('mongoose')
const {Schema} = mongoose

mongoose.connect('mongodb://localhost:27017/translation')

mongoose.connection.on('error', console.log)

const Translation = module.exports = mongoose.model('Translation', {
    word: [String] ,
    translateTo: Schema.Types.Mixed
})

Translation.createTranslation = ( { word, translateTo, toWord }, callback ) => {

    Translation.findOne( { word } , (err, translation ) => {
        
        translation = translation || { translateTo : {} } 
        translation.translateTo[translateTo] = toWord  

        if( translation.word ){

            for( const wd of [ word, toWord ] ){
                if( translation.word.indexOf( wd ) < 0  ){
                    translation.word = translation.word.concat( wd )
                }
            }
            Translation.update( {word}, translation , callback )

        } else {

            translation.word = [ word, toWord ]
            Translation.create( translation, callback  )
        
        }

    } )
}


//{
//  lang: String,
//  word: String
//}