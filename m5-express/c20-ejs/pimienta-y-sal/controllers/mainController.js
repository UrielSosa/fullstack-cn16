let platos = [
    {
        name: 'Carpaccio fresco',
        description: 'Entrada Carpaccio de salmón con cítricos U$S 65.50'
    },
    {
        name: 'Carpaccio fresco',
        description: 'Entrada Carpaccio de salmón con cítricos U$S 65.50'
    },
    {
        name: 'Carpaccio fresco',
        description: 'Entrada Carpaccio de salmón con cítricos U$S 65.50'
    },
    {
        name: 'Carpaccio fresco',
        description: 'Entrada Carpaccio de salmón con cítricos U$S 65.50'
    },
]


module.exports = {
    home: (req, res) => {
        res.render('index', {titleMenu:'Nuestro menú', platos});
    },
    detail: (req, res) => {
        res.render('detail');
    }
}