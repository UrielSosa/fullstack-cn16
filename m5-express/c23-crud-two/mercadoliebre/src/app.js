const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

/* config template */
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

/* Config express */
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


/* Routes */
const mainRouter = require('./routes/main');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);



app.listen(process.env.PORT || 3000, () => console.log('Servidor funcionando'));