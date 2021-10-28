const path = require('path');

let controller = {
    register: (req,res)=>{
        res.render('users/register');
    },
    registered: function (req, res) {
        res.send('registrado');
    },
    login (req,res) {
        res.render('users/login');
    },
    logged (req, res) {
        res.send('logueado');
    }
}

module.exports = controller;