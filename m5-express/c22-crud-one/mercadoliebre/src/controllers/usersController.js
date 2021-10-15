const path = require('path');

let controller = {
    register: (req,res)=>{
        res.render('users/register');
    },
    registered: function (req, res) {
        
    },
    login (req,res) {
        res.render('users/login');
    }
}

module.exports = controller;