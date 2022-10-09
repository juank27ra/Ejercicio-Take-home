require('../app')
const { Router } = require('express');
const router = Router();
const Ecommerce = require('../models/Ecommerce');
require('../middleware/next')

router.get('/', async (req, res) => {
    try {
    let info = await Ecommerce.find({})
        res.status(200).send(info)
    } catch (error) {
        res.status(404).send(error)
    }
})

router.post('/', async (req, res, next) => {
        const {Id, Sku, Cantidad} = req.body        
        try {
            const modeloEcomerce =  new Ecommerce({
                Id,
                Sku,
                Cantidad
            })
            modeloEcomerce.save()
            res.status(200).send(`${Sku} agregado con exito`)
        } catch (error) {
            next(error)
        // res.status(404).send(error)
        }
    })


module.exports= router