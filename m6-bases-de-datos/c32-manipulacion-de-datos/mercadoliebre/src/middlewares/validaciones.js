const { check } = require('express-validator');
module.exports = {
  validationCreate: [
    check('name').notEmpty().withMessage('No puede estar vacio').bail().isString().withMessage('Debe ser un campo alfanumerico').bail(),
    check('price').notEmpty().withMessage('No puede estar vacio').bail().isNumeric().withMessage('Debe ser un campo numerico').bail(),
    check('discount').isNumeric().withMessage('Debe ser un campo numerico').bail(),
    check('category').notEmpty().withMessage('No puede estar vacio').bail(),
    check('description').notEmpty().withMessage('No puede estar vacio').bail().isLength({ min: 0, max: 100 }).withMessage('Debe tener como maxim 100 caracteres').bail(),
  ],
  validationRegister: [
    check('name').notEmpty().withMessage('No puede estar vacio').bail().isLength({ min : 2 }).withMessage('Debe tener como minimo 2 caracteres').bail(),
    check('email').notEmpty().withMessage('No puede estar vacio').bail().isEmail().withMessage('Debe ser un mail valido').bail(),
    check('password').notEmpty().withMessage('No puede estar vacio').bail().isLength({ min: 8 }).withMessage('Debe tener como minimo 8 caracteres').bail(),
    check('repassword').notEmpty().withMessage('No puede estar vacio').bail().custom((repass, { req }) => {
      if (repass !== req.body.password) {
        throw new Error('Las contraseñas deben coincidir');
      }
      return true;
    }).bail()
  ]

}