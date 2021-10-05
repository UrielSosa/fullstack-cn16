const express = require('express');
const app = express();


/* routes */
const mainRouter = require('./routes/main');
app.use('/', mainRouter);


app.listen(3000, () => console.log('Server corriendo\nhttp://localhost:3000'));