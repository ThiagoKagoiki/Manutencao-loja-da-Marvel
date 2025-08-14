// // import { createProdutoFD, fetchProdutos, deleteProduto } from './api.js';
// // import { Produto } from './product.js';
// // import { requireUser } from './store.js';

// // const user = requireUser();
// // if (!user.admin) window.location.href = 'index.html';

// // const list = document.getElementById('admin-list');
// // const form = document.getElementById('form-prod');

// // form.addEventListener('submit', async (e)=>{
// //   e.preventDefault();
// //   const fd = new FormData(form);
// //   try {
// //     await createProdutoFD(fd);
// //     form.reset();
// //     await render();
// //     alert('Produto cadastrado!');
// //   } catch (e) {
// //     alert('Erro ao salvar: ' + e.message);
// //   }
// // });

// // async function render(){
// //   const produtos = (await fetchProdutos()).map(p=> new Produto(p));
// //   list.innerHTML = produtos.map(p => `
// //     <div class="card">
// //       <img src="${p.imagem_url}" alt="${p.nome}">
// //       <h3>${p.nome}</h3>
// //       <p class="price">R$ ${p.precoBRL()}</p>
// //       <div class="actions">
// //         <button class="btn danger" data-del="${p.id}">Excluir</button>
// //       </div>
// //     </div>
// //   `).join('');

// //   list.querySelectorAll('button[data-del]').forEach(btn => {
// //     btn.addEventListener('click', async ()=>{
// //       if (!confirm('Excluir este produto?')) return;
// //       await deleteProduto(Number(btn.dataset.del));
// //       await render();
// //     });
// //   });
// // }

// // render();


// const form = document.getElementById('form-prod');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

//     const novoProduto = {
//         id: Date.now(),
//         nome: form.nome.value,
//         codigo: form.codigo.value,
//         preco: parseFloat(form.preco.value),
//         descricao: form.descricao.value,
//         link_amazon: form.link_amazon.value,
//         imagem: ''
//     };

//     const arquivo = form.imagem.files[0];
//     if (arquivo) {
//         const reader = new FileReader();
//         reader.onload = () => {
//             novoProduto.imagem = reader.result;
//             produtos.push(novoProduto);
//             localStorage.setItem('produtos', JSON.stringify(produtos));
//             form.reset();
//             alert('Produto cadastrado com sucesso!');
//         };
//         reader.readAsDataURL(arquivo);
//     } else {
//         produtos.push(novoProduto);
//         localStorage.setItem('produtos', JSON.stringify(produtos));
//         form.reset();
//         alert('Produto cadastrado com sucesso!');
//     }
// });


// Seleciona elementos do formulário e lista
const form = document.getElementById('form-prod');
const list = document.getElementById('admin-list');

// Carrega produtos do localStorage
function getProdutos() {
    return JSON.parse(localStorage.getItem('produtos')) || [];
}

// Salva produtos no localStorage
function setProdutos(produtos) {
    localStorage.setItem('produtos', JSON.stringify(produtos));
}

// Renderiza a lista de produtos cadastrados no admin
function renderAdmin() {
    const produtos = getProdutos();
    list.innerHTML = produtos.map(p => `
        <div class="card">
            <img src="${p.imagem || 'imagens/default.jpg'}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p class="price">R$ ${p.preco.toFixed(2).replace('.', ',')}</p>
            <p class="descricao">${p.descricao}</p>
            <div class="actions">
                <button class="btn danger" onclick="deletarProduto(${p.id})">Excluir</button>
            </div>
        </div>
    `).join('');
}

// Adiciona produto
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const preco = parseFloat(form.preco.value.replace(',', '.'));
    const descricao = form.descricao.value.trim();
    const link_amazon = form.link_amazon.value.trim();
    const imagemInput = form.imagem.files[0];

    if (!nome || isNaN(preco)) return alert("Preencha nome e preço!");

    // Converte a imagem para base64
    let imagem = '';
    if (imagemInput) {
        imagem = await new Promise(resolve => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsDataURL(imagemInput);
        });
    }

    const produtos = getProdutos();
    const novoProduto = {
        id: Date.now(), // id único
        nome,
        preco,
        descricao,
        link_amazon,
        imagem
    };

    produtos.push(novoProduto);
    setProdutos(produtos);

    form.reset();
    renderAdmin();
    alert('Produto cadastrado com sucesso!');
});

// Deleta produto
function deletarProduto(id) {
    let produtos = getProdutos();
    produtos = produtos.filter(p => p.id !== id);
    setProdutos(produtos);
    renderAdmin();
}

// Inicializa
renderAdmin();
