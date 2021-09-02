# Intro a servidores


## Pasos para un proyecto de express
1. Primero iniciamos un proyecto con npm desde la terminal, en la carpeta correspondiente
```
npm init o npm init -y
```
2. Instalamos express
```
npm install express o npm i express
```
3. Requerimos express
```
const express = require('express');
```
4. Creamos una aplicacion con express
```
const app = express();
```
5. Levantar el puerto del servidor
```
app.listen(3000, () => console.log('Estamos corriendo en el puerto 3000'));
```