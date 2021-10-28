const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const controller = require('../controllers/productController');
const { validationCreate } = require('../middlewares/validaciones');

/* Configuracion de multer */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
        const name = `product-${Date.now()}${path.extname(file.originalname)}`
        cb(null, name)
    }
})
  
const upload = multer({ storage })





/* Envios de vistas */
router.get('/', controller.index); // Listado de productos
router.post('/', upload.single('image'), validationCreate, controller.store); //Ruta que guarda

router.get('/create', controller.create);
router.get('/edit/:id', controller.edit);

router.get('/:id', controller.detail);

/* Procesamiento de datos */
router.delete('/:id', controller.delete);
router.put('/edit/:id', controller.update);


module.exports = router;