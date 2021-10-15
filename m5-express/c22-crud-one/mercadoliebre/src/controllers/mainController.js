const path = require('path');
const fs = require('fs');

/* Logica para traer los productos */
let jsonProducts = fs.readFileSync(path.resolve(__dirname, '../db/products.json'), 'utf-8');
let products = JSON.parse(jsonProducts); //Convertimos el json a array


module.exports = {
    home: (req, res) => {
        let visited = [];
        let insale = [];
        
        products.forEach(product => {
            if (product.category == 'in-sale') {
                insale.push(product);
            } else {
                visited.push(product)
            }
        });

        res.render('home', { insale, visited });
    }
}