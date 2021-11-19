const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const controller = require('../controllers/usersController');
const { validationRegister } = require('../middlewares/validaciones')

/* Configuracion de multer */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/avatars'));
    },
    filename: function (req, file, cb) {
        const name = `avatar-${Date.now()}${path.extname(file.originalname)}`;
        cb(null, name);
    }
})
  
const upload = multer({ storage })

/* Register */
router.get('/register', controller.register);
router.post('/register', upload.single('avatar'), validationRegister, controller.registered);


/* Login */
router.get('/login', controller.login);
router.post('/login', controller.logged);



module.exports = router;