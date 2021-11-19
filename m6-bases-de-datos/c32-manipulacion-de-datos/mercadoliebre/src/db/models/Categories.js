module.exports = (sequelize, dataTypes) => {
    const alias = 'Categories';

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
    }

    const config = {
        tableName: 'categories',
        underscored: true,
        timestamps: true,
        paranoid: true
    }

    const Product = sequelize.define(alias, cols, config);
    return Product;
}