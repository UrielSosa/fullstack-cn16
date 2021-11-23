## Microdesafios para el CRUD TWO
1. Instalar multer
```
npm i multer
```
2. Crear un input de tipo file
3. Agregar el enctype="multipart/form-data" en el formulario de creación
4. Requerir multer en las rutas de productos (post crear)
5. Agregamos la config de multer en las rutas de productos
6. Implementamos multer en la ruta de crear (upload.any, upload.single)
7. En el controller guardar el nombre de la imagen en el nuevo producto (req.file.filename, req.files.filename)