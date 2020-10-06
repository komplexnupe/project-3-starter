const productsController = require('express').Router();
const db = require('../../models')


productsController.get("/api/products", (req, res) => {
    db.Products.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    });
})

productsController.get("/api/products/:id", (req, res) => {
    db.Products.findById(req.params.id)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    });
})

productsController.get("/api/products/:category", (req, res) => {
    db.Products.findById(req.params.category)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    });
})