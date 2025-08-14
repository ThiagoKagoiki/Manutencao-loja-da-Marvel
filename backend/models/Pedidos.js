import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Pedido = sequelize.define('Pedidos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    data_pedido: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    qtd:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    valorTotal:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

return Pedido;
};