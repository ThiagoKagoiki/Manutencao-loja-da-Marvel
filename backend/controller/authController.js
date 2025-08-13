import db from '../models/index.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';


export const registrar = async (req, res) => {
  try {
    const { nome, sobrenome, login, senha, cpf, telefone, endereco } = req.body;

    const novoUsuario = await db.User.create({ nome, sobrenome, login, senha, cpf, telefone, endereco });

    res.status(201).json({
      mensagem: 'Usuário criado com sucesso',
      usuario: novoUsuario
    });
  } catch (err) {
    res.status(400).json({
      erro: 'Erro ao criar usuário',
      detalhes: err.message
    });
  }
};

export const login = async (req, res) => {
  const { login, senha } = req.body;

  try {
    const usuario = await db.User.findOne({ where: { login } });

    if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
      return res.status(401).json({ erro: 'Credenciais inválidas' });
    }

    const token = jwt.sign({
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email
    }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({
      mensagem: 'Login bem-sucedido',
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      },
      token
    });
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({
      erro: 'Erro interno do servidor',
      detalhes: err.message
    });
  }
};

// //Consultas

export const comprar = async (req, res) => {
  try {
    const { user_id, produtos, qtd, valorTotal } = req.body;

    const user = await db.User.findByPk(user_id);

    if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    const pedido = await db.Pedido.create({
        user_id,
        produtos,
        qtd,
        valorTotal
    })

    res.status(201).json({
      mensagem: 'Pedido criado com sucesso',
      pedido
    });
  } catch (err) {
    res.status(400).json({
      erro: 'Erro ao criar Consulta',
      detalhes: err.message
    });
  }
}

// export const deletarConsulta = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await db.Consulta.destroy({ where: { id } });

//     res.status(201).json({
//       mensagem: 'Consulta deletada com sucesso',
//     });
//   } catch (err) {
//     res.status(400).json({
//       erro: 'Erro ao deletar Consulta',
//       detalhes: err.message
//     });
//   }
// }

// export const editarConsulta = async (req, res) => {
//   try {
//     const { id, horario, medico, emailUser } = req.body;

//     const novaConsulta = await db.Consulta.update({ horario, medico, emailUser }, { where: { id } });

//     if (novaConsulta[0] === 0) {
//       res.status(400).json({
//         mensagem: 'Id inexistente',
//       });
//     }

//     res.status(201).json({
//       mensagem: 'Consulta editada com sucesso',
//       consulta: novaConsulta
//     });
//   } catch (err) {
//     res.status(400).json({
//       erro: 'Erro ao editar Consulta',
//       detalhes: err.message
//     });
//   }
// }

// export const verConsulta = async (req, res) => {
//   try {

//     const consultas = await db.Consulta.findAll();

//     res.json(consultas)
//   } catch (err) {
//     res.status(500).json({
//       erro: 'Erro ao ver Consulta',
//       detalhes: err.message
//     });
//   }
// }


// export const verMinhasConsultas = async (req, res) => {
//   try{
//     const emailUser = req.usuario.email

//     const consultas = await db.Consulta.findAll({
//       where: {emailUser}
//     })

//     res.json(consultas)
//   }catch(error){
//     res.status(500).json({
//       erro: "Erro ao ver suas consultas",
//       detalhes: error.menssage
//     })
//   }
// }