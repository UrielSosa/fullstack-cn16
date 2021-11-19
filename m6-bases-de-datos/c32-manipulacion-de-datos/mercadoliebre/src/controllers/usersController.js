const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

let users = fs.readFileSync(path.resolve(__dirname, '../db/users.json'), { encoding: 'utf-8'});
users = JSON.parse(users);


let controller = {
    register: (req,res)=>{
        res.render('users/register');
    },
    registered: function (req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.render('users/register', errors.mapped());
        }else {
            const user = {
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 12),
                image: req.file.filename
            }
            delete user.repassword;
            
            users.push(user);

            let jsonDeUsuarios = JSON.stringify(users, null, 4);
            fs.writeFileSync(path.resolve(__dirname, '../db/users.json'), jsonDeUsuarios);
            return res.redirect('/users/login');
        }
        

    },
    login (req,res) {
        res.render('users/login');
    },
    logged (req, res) {
        res.send('logueado');
    }
}

module.exports = controller;