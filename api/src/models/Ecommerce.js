const {Schema, model} = require('mongoose')

const ecommerceSchema = new Schema({
    Id: Number,
    Sku: String,
    Cantidad: Number
})
ecommerceSchema.set('toJSON', {
    transform : (document, returnedObject) => {
        delete returnedObject.__v
    }
})

const Ecommerce = model('Ecommerce', ecommerceSchema)


module.exports = Ecommerce