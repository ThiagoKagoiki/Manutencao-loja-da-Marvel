import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const ItensPedido = sequelize.define('ItensPedido', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      quantidade:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      total_item:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
  });

  return ItensPedido;
};