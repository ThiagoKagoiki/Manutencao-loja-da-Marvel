    function adicionarCarrinho(prodId) {
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

        const produto = produtos.find(p => p.id === prodId);
        if (!produto) return;

        let item = carrinho.find(p => p.id === prodId);
        if (item) {
            item.qtd += 1;
        } else {
            carrinho.push({ ...produto, qtd: 1 });
        }

        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert(`${produto.nome} adicionado ao carrinho!`);
    }

    function mostrarCarrinho() {
        const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        let total = 0;

        if (carrinho.length === 0) {
            alert("Carrinho vazio!");
            return;
        }

        let texto = carrinho.map(i => {
            total += i.preco * i.qtd;
            return `${i.qtd}x ${i.nome} - R$ ${ (i.preco * i.qtd).toFixed(2).replace('.', ',') }`;
        }).join("\n");

        texto += `\nTotal: R$ ${total.toFixed(2).replace('.', ',')}`;
        if (confirm(texto + "\n\nConfirmar compra?")) {
            localStorage.removeItem('carrinho');
            alert("Compra efetuada com sucesso!");
            window.location.reload();
        }
    }
