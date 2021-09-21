const express = require('express');
const app = express();

/* Config express */
app.use(express.static('public'));


app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.post('/register', (req,res)=> {
    res.send('Ya te registraste campeón');
});

app.listen(3000, () => console.log('Servidor funcionando'));