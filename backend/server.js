import express from 'express';
import dotenv from 'dotenv';
import db from './models/index.js';
import cors from 'cors';
import { comprar, login, registrar } from './controller/authController.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

//Usuarios

app.use(express.json())


app.post('/registrar', registrar)
app.post('/login', login)


app.post('/pedido', comprar)
// Sincroniza os modelos com o banco e inicia o servidor
db.sequelize.sync().then(() => {
  app.listen(3000, () => console.log("Servidor da clínica rodando na porta 3000"));
});