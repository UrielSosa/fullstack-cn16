const { validationResult } = require('express-validator');
module.exports = {
    index (req, res) {
        res.render('index');
    },
    store (req, res) {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            console.log(errors);
            return res.render('index', { errors: errors.errors, old: req.body });
        }
        res.render('index', { data: req.body } );
    }
}