## Microdesafios para el CRUD ONE
_Tené en cuenta que si hay cosas que te parecen similares es porque podemos hacerlo de diferentes formas_
1. Traer el array de productos al mainController
    - Usamos los siguiente modulos (fs, metodos json, path)
2. Filtrar los productos para devolver en el home dos arrays con insale y visited
    - Podriamos usar (if, filter, foreach)
3. Cargar en la home los productos
    - Podemos usar foreach, archivos parciales
4. Enviar el detalle de un producto
    - Tenemos que usar el id para enviarlo a la ruta
    - En el controller debemos buscar el id que llega por parametro
    - Palabras clave -> (find, filter, foreach, if, req.params.id)
5. Cargar en la vista del detalle los datos del producto
    - Tanto para editar como para eliminar necesitamos el id
6. Crear la funcionalidad para crear un nuevo producto
    - Palabras clave (req.body, push, JSON.stringify, fs.writeFileSync, res.redirect, method post)
7. Crear la funcionalidad de actualizar producto
    - Palabras clave (req.body, find, map, method-override, JSON.stringify, fs.writeFileSync, res.redirect)
8. Crear funcionalidad para borrar producto
    - Palabras clave (filter, req.params.id, method-override, JSON.stringify, fs.writeFileSync, res.redirect)

**_Para mas info revisa el siguiente doc [link acá](https://drive.google.com/file/d/1bFeh4QzhVZu_U5nHUb2tY08RMHZBKPAi/view)_** :heart: