import { createProdutoFD, fetchProdutos, deleteProduto } from './api.js';
import { Produto } from './product.js';
import { requireUser } from './store.js';

const user = requireUser();
if (!user.admin) window.location.href = 'index.html';

const form = document.getElementById('form-prod');
const list = document.getElementById('admin-list');

form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  const fd = new FormData(form);
  try {
    await createProdutoFD(fd);
    form.reset();
    await render();
    alert('Produto cadastrado!');
  } catch (e) {
    alert('Erro ao salvar: ' + e.message);
  }
});

async function render(){
  const produtos = (await fetchProdutos()).map(p=> new Produto(p));
  list.innerHTML = produtos.map(p => `
    <div class="card">
      <img src="${p.imagem_url}" alt="${p.nome}">
      <h3>${p.nome}</h3>
      <p class="price">R$ ${p.precoBRL()}</p>
      <div class="actions">
        <button class="btn danger" data-del="${p.id}">Excluir</button>
      </div>
    </div>
  `).join('');

  list.querySelectorAll('button[data-del]').forEach(btn => {
    btn.addEventListener('click', async ()=>{
      if (!confirm('Excluir este produto?')) return;
      await deleteProduto(Number(btn.dataset.del));
      await render();
    });
  });
}

render();

