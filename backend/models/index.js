import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import UserModel from './User.js';
import ProdutoModel from './Produtos.js';
import PedidoModel from './Pedidos.js';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

const db = {
  Sequelize,
  sequelize,
  User: UserModel(sequelize),
  Produto: ProdutoModel(sequelize),
  Pedido: PedidoModel(sequelize)
};

db.User.hasMany(db.Pedido, { foreignKey: 'user_id' });
db.Pedido.belongsTo(db.User, { foreignKey: 'user_id' });


export default db;