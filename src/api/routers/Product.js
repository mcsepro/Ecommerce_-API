const express = require('express')
const product = require('../models/product')
const Auth = require('../middleware/auth')

const router = new express.Router()

//fetch all Products
router.get('/products', async(req, res) => {
    try {
        const Product = await Product.find({})
        res.status(200).send(Product)
    } catch (error) {
        res.status(400).send(error)
    }
})

//fetch an item
router.get('/products/:id', async(req, res) => {
    try{
        const product = await product.findOne({_id: req.params.id})
        if(!product) {
            res.status(404).send({error: "Product not found"})
        }
        res.status(200).send(product) 
    } catch (error) {
        res.status(400).send(error)
    }
})

//create a product
router.post('/product',Auth, async(req, res) => {
    try {
        const newItem = new product({
            ...req.body,
            owner: req.user._id
        })
        await newItem.save()
        res.status(201).send(newProduct)
    } catch (error) {
        console.log({error})
        res.status(400).send({message: "error"})
    }
})

//update a product

router.patch('/product/:id', Auth, async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'description', 'category', 'price']

    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({ error: 'invalid updates'})
    }

    try {
        const product = await Product.findOne({ _id: req.params.id})
    
        if(!product) {
            return res.status(404).send()
        }

        updates.forEach((update) => product[update] = req.body[update])
        await product.save()
        res.send(product)
    } catch (error) {
        res.status(400).send(error)
    }
})

//delete product
router.delete('/products/:id', Auth, async(req, res) => {
    try {
        const deletedProduct = await Item.findOneAndDelete( {_id: req.params.id} )
        if(!deletedProduct) {
            res.status(404).send({error: "product not found"})
        }
        res.send(deletedProduct)
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router