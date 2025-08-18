// Pega os produtos do localStorage
const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');

// Monta o HTML dos produtos
function montaHTML() {
    const container = document.querySelector('.container');

    container.innerHTML = produtos.map((p, i) => `
      <article class="card">
        <div class="product-image"
             style="background-image: url(imagens/img${i}.jpg); height: 220px; width: 220px; background-size: cover; background-position: center;">
        </div>
        <h3>${p.nome}</h3>
        <p class="price">R$ ${p.preco.toFixed(2).replace('.', ',')}</p>
        <p class="descricao">${p.descricao}</p>
        
        <label>
          Quantidade: 
          <input type="number" id="qtd-${p.codigo}" value="1" min="1" max="99" style="width:60px; margin-left:5px;">
        </label>
        
        <button class="btn" onclick="adicionarCarrinho('${p.codigo}')">Adicionar ao Carrinho</button>
      </article>
    `).join('');
}

// Adiciona produto ao carrinho
function adicionarCarrinho(prodCodigo) {
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const produto = produtos.find(p => p.codigo == prodCodigo); // usar codigo
    if (!produto) return;

    const qtdInput = document.getElementById(`qtd-${prodCodigo}`);
    const qtd = qtdInput ? parseInt(qtdInput.value) : 1;

    let item = carrinho.find(p => p.codigo == prodCodigo);
    if (item) {
        item.qtd += qtd;
    } else {
        carrinho.push({ ...produto, qtd: qtd });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${produto.nome} adicionado ao carrinho!`);
}

// Mostra o carrinho e finaliza a compra
function mostrarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    if (carrinho.length === 0) return alert("Carrinho vazio!");

    let total = 0;
    let texto = carrinho.map(i => {
        total += i.preco * i.qtd;
        return `${i.qtd}x ${i.nome} - R$ ${(i.preco * i.qtd).toFixed(2).replace('.', ',')}`;
    }).join("\n");

    texto += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;

    if (confirm(texto + "\n\nConfirmar compra?")) {
        localStorage.removeItem('carrinho');
        alert("Compra efetuada com sucesso!");
        window.location.reload();
    }
}

function calculaCesta() {
    mostrarCarrinho(); // reutiliza a função mostrarCarrinho
}

// Expondo funções globalmente
window.onload = montaHTML;
window.adicionarCarrinho = adicionarCarrinho;
window.calculaCesta = calculaCesta;
window.mostrarCarrinho = mostrarCarrinho;
