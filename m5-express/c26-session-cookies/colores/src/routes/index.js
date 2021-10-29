var express = require('express');
var router = express.Router();
const { check } = require('express-validator');
const controller = require('../controllers/mainController');

const validaciones = [
  check('name').notEmpty().withMessage('El campo nombre no puede estar vacio').bail(),
  check('color').notEmpty().withMessage('El campo color no puede estar vacio').bail(),
  check('email').notEmpty().withMessage('El campo email no puede estar vacio').bail().isEmail().withMessage('Debe ser un email valido').bail()
]


router.get('/', controller.index);
router.post('/guardar', validaciones, controller.store);

module.exports = router;
