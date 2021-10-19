const path = require('path');
const fs = require('fs');

/* Logica para traer los productos */
let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../db/products.json'), 'utf-8');
let products = JSON.parse(jsonProducts); //Convertimos el json a array

const nuevoId = () => {
    let ultimo = 0;
    products.forEach(product => {
        if (product.id > ultimo) {
            ultimo = product.id;
        }
    });
    return ultimo + 1;
}

module.exports = {
    index: (req, res) => {
        res.render('products/products');
    },
    detail (req, res) {
        let id = req.params.id;
        // let productoDetalle = products.filter(product => {
        //     return product.id == id;
        // })
        let productoDetalle = products.find(product => {
            return product.id == id;
        })

        res.render('products/detail', { product: productoDetalle });
    },
    create: (req, res) => {
        res.render('products/create');
    },
    store (req, res) {
        // Creamos el producto base
        let product = {
            id: nuevoId(),
            ...req.body,
             image: req.file.filename || 'default-image.png',
        }
        // Agregamos el nuevo producto
        products.push(product);

        // Pasamos a json todos los productos y sobreescribimos la db
        let jsonDeProductos = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/products.json'), jsonDeProductos);

        //Enviamos al detalle del producto
        //res.redirect('/products/detail/' + product.id);
        res.redirect('/');
    },
    edit: function (req, res) {
        let productoEditar = products.find(product => {
            return product.id == req.params.id;
        })
        res.render('products/edit', { product: productoEditar });
    },
    update (req, res) {

        // Editamos el producto buscandolo con una condición
        products.forEach(product => {
            if (product.id == req.params.id) {
                product.name = req.body.name;
                product.description = req.body.description;
                product.price = req.body.price;
                product.discount = req.body.discount;
                product.category = req.body.category;
                product.image = 'default-image.png';
            }
        })

        // let productToEdit = products.find(product => {
        //     return product.id == req.params.id;
        // })
        // productToEdit.name = req.body.name;

        // Pasamos a json todos los productos y sobreescribimos la db
        let jsonDeProductos = JSON.stringify(products, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/products.json'), jsonDeProductos);

        res.redirect('/');
    },
    delete (req, res) {

        let productosRestantes = products.filter(product => {
            return product.id != req.params.id;
        })

        let jsonDeProductos = JSON.stringify(productosRestantes, null, 4);
        fs.writeFileSync(path.resolve(__dirname, '../db/products.json'), jsonDeProductos);

        res.redirect('/');
    }
}