let platos = [
    {
        id: 1,
        name: 'Carpaccio fresco',
        description: 'Entrada Carpaccio de salmón con cítricos U$S15.50'
    },
    {
        id: 2,
        name: 'Risotto de berenjena',
        description: 'Risotto de berenjena y queso de cabra U$S 10.00'
    },
    {
        id: 3,
        name: 'Mousse de arroz',
        description: 'Mousse de arroz con leche y aroma de azahar U$S 27.50'
    },
    {
        id: 4,
        name: 'Espárragos blancos',
        description: 'Espárragos blancos con vinagreta de verduras y jamón ibérico U$S 37.50'
    },
]


let controller = {
    home: (req, res) => {
        res.locals.user = 'Uriel';
        res.render('index', {titleMenu:'Nuestro menú', platos});
    },
    detail: (req, res) => {
        let plato = platos.find(plato => plato.id == req.params.id);
        
        res.render('detail', {plato});
    }
}

module.exports = controller; 