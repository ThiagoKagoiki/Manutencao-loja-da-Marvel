import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Produto = sequelize.define('Produtos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    preco: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Produto;
};