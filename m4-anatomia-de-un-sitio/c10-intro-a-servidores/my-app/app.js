const express = require('express');
const app = express();
const path = require('path');



let index = path.resolve(__dirname, './views/index.html')

app.get('/', (req, res) => {
    res.sendFile(index);
    //res.sendFile(path.resolve(__dirname, './views/index.html'));
})
app.get('/articulos', (req, res) => {
    res.send('Los articulos');
})



app.listen(3000, () => console.log('Estamos corriendo en el puerto 3000'));