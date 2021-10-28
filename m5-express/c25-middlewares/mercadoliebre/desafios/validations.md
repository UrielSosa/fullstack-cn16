Validaciones para el form de crear
- name (que no esté vacio - minimo de 2 caracteres - que sea string)
- price (que no esté vacio - que sea numerico)
- discount (que sea numerico)
- Category (que no esté vacia)
- Image (que venga una imagen)
- Description (que tenga como maximo 100 caracteres - que no esté vacio)


Paso a paso express validator
1. Instalamos express validator
2. Requerimos express validator en las rutas
3. Usamos check para validar los campos del form
4. Podemos revisar la documentación de express validator [acá](https://express-validator.github.io/docs/validation-chain-api.html)
5. Podemo modularlo usando un array con cada una de las validaciones
```
let validationCreate = [
    check('name').notEmpty().withMessage('No puede estar vacio')bail(),
    check('price').isNumeric().withMessage('Debe ser un campo numerico').bail(),
```
6. Se debe implementar entre medio de la ruta y el metodo del controller
```
router.post('/', upload.single('image'), validationCreate, controller.store);
```
