const { validationResult } = require('express-validator');
let db = require('../db/models')


module.exports = {
    index: (req, res) => {
        db.Product.findAll()
            .then(products => {
                return res.render('products/products', { products });
            }).catch(error => {
                return res.send(error)
            })
        
    },
    detail (req, res) {
        db.Product.findByPk(req.params.id)
            .then(product => {
                res.render('products/detail', { product });
            }).catch(error => {
                return res.send(error)
            })

    },
    create: (req, res) => {
        res.render('products/create');
    },
    store (req, res) {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.render('products/create', { errors: errors.mapped(), old: req.body })
        }else {
            let product = {
                ...req.body,
                image: req.file.filename || 'default-image.png',
            }

            db.Product.create(product)
                .then(product => {
                    return res.redirect(`/products/${product.id}`);
                }).catch(error => {
                    return res.send(error)
                })
        }
    },
    edit: function (req, res) {
        db.Product.findByPk(req.params.id)
                .then(product => {
                    res.render('products/edit', { product });
                }).catch(error => {
                    return res.send(error)
                })
    },
    update (req, res) {
        let product = {
            ...req.body,
            image: req.file.filename || 'default-image.png',
        }
        db.Product.update(product, {
            where: {
                id: req.params.id
            }
        })
        
        res.redirect('/products');
    },
    delete (req, res) {

        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(x => {
                res.redirect('/products');
            }).catch(error => {
                return res.send(error)
            })        
    }
}