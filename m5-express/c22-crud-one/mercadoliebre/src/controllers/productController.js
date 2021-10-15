module.exports = {
    index: (req, res) => {
        res.render('products/products');
    },
    detail (req, res) {
        res.render('products/detail');
    },
    create: (req, res) => {
        res.render('products/create');
    },
    edit: function (req, res) {
        res.render('products/edit');
    }
}