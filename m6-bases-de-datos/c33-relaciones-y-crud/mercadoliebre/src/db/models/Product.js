module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            notNull: false,
        },
        price: {
            type: dataTypes.FLOAT,
            notNull: false,
        },
        discount: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
        description: {
            type: dataTypes.TEXT,
            notNull: false,
        },
        image: {
            type: dataTypes.STRING(45),
            notNull: false,
        },
        category_id: {
            type: dataTypes.INTEGER,
            notNull: false,
        },
    }

    const config = {
        tableName: 'products',
        underscored: true,
        timestamps: true,
        paranoid: true
    }
    
    const Product = sequelize.define(alias, cols, config);

    Product.associate = models => {
        Product.belongsTo(models.Category, {as: 'category', foreignKey: 'category_id'});
    }

    return Product;
}

// Un producto tiene una categoria - belongsTo