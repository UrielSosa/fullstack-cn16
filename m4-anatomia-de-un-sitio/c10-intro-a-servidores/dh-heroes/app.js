const express = require('express');
const app = express();
const path = require('path');

//path.resolve(__dirname, )

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/index.html'));
})
app.get('/babbage', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/babbage.html'));
})

app.listen(3030, () => console.log('estamos corriendo en el puerto 3030\nhttp://localhost:3030'));