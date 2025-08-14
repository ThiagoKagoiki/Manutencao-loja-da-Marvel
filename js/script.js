// let login = '', senha, qtdCont = 0, valor = 0, totalGeral = 0, cesta, loginAut
// let article, div, div2, h3, p1, input, p2, span, aLink, main, section, footer, h2, p3, span2, aLink2
// let usr = []
// let snh = []

// class Produto {
//     constructor(nome, cod, preco, link, descricao, qtd, totalCompra) {
//         this.nome = nome;
//         this.cod = cod;
//         this.preco = preco;
//         this.link = link;
//         this.descricao = descricao;
//         this.qtd = qtd;
//         this.totalCompra = totalCompra;
//     }

//     calcularTotal(){
//         totalCompra = preco * qtd
//         totalCompra = JSON.parse(localStorage.getItem('totCompArr'));
//     }
// }


// if (localStorage.prodArr) {
//     this.produto = JSON.parse(localStorage.getItem('prodArr'));
// }
// if (localStorage.codArr) {
//     this.cod = JSON.parse(localStorage.getItem('codArr'));
// }
// if (localStorage.precoArr) {
//     this.preco = JSON.parse(localStorage.getItem('precoArr'));
// }
// if (localStorage.linkArr) {
//     this.link = JSON.parse(localStorage.getItem('linkArr'));
// }
// if (localStorage.descArr) {
//     this.descricao = JSON.parse(localStorage.getItem('descArr'));
// }
// if (localStorage.qtdArr) {
//     this.qtd = JSON.parse(localStorage.getItem('qtdArr'));
// }
// if (localStorage.totCompArr) {
//     this.totalCompra = JSON.parse(localStorage.getItem('totCompArr'));
// }

// function getDados(){
//     if(localStorage.qtdArr){
//         qtd = JSON.parse(localStorage.getItem('qtdArr'))
//     }
//     //qtd.push(0)
//     localStorage.qtdArr = JSON.stringify(qtd)
//     if(localStorage.totCompArr){
//         totalCompra = JSON.parse(localStorage.getItem('totCompArr'))
//     }
//     //totalCompra.push(0)
//     localStorage.totCompArr = JSON.stringify(totalCompra)
//     if(localStorage.prodArr){
//         produto = JSON.parse(localStorage.getItem('prodArr'))
//     }
//     let prod = document.getElementById('produto').value
//     produto.push(prod)
//     localStorage.prodArr = JSON.stringify(produto)
//     document.getElementById('produto').value = ''

//     if(localStorage.descArr){
//         descricao = JSON.parse(localStorage.getItem('descArr'))
//     }
//     let descri = document.getElementById('descricao').value
//     descricao.push(descri)
//     localStorage.descArr = JSON.stringify(descricao)
//     document.getElementById('descricao').value = ''

//     if(localStorage.codArr){
//         cod = JSON.parse(localStorage.getItem('codArr'))
//     }
//     let codig = document.getElementById('codigo').value
//     cod.push(codig)
//     localStorage.codArr = JSON.stringify(cod)
//     document.getElementById('codigo').value = ''

//     if(localStorage.precoArr){
//         preco = JSON.parse(localStorage.getItem('precoArr'))
//     }
//     let prec = document.getElementById('preco').value
//     preco.push(parseFloat(prec.replace(',' , '.')))
//     localStorage.precoArr = JSON.stringify(preco)
//     document.getElementById('preco').value = ''

//     if(localStorage.linkArr){
//         link = JSON.parse(localStorage.getItem('linkArr'))
//     }
//     let lnk = document.getElementById('linkAmazon').value
//     link.push(lnk)
//     localStorage.linkArr = JSON.stringify(link)
//     document.getElementById('linkAmazon').value = ''

//     alert("Dados inseridos com Sucesso!")
// }

// function montaHTML() {
//     const container = document.querySelector('.container');
//     const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

//     container.innerHTML = produtos.map(p => `
//         <div class="card">
//             <div class="product-image" style="background-image: url('${p.imagem || 'imagens/default.jpg'}');"></div>
//             <h3>${p.nome}</h3>
//             <p class="price">R$ ${p.preco.toFixed(2).replace('.', ',')}</p>
//             <p class="descricao">${p.descricao}</p>
//             <button class="btn" onclick="adicionarCarrinho(${p.id})">Adicionar ao Carrinho</button>
//             <a href="${p.link_amazon}" target="_blank" class="btn">Comprar na Amazon</a>
//         </div>
//     `).join('');
// }

// window.onload = montaHTML;


// function criaLogin(){
//     if(localStorage.usrArr){
//         usr = JSON.parse(localStorage.getItem('usrArr')) //JSON - Javascript Object Notation: podem ser representados em forma de String e utilizaos em outas linguagens.
//     }
//     if(localStorage.snhArr){
//         snh = JSON.parse(localStorage.getItem('snhArr'))
//     }
//     let novoUsr = prompt("login:")
//     usr.push(novoUsr)
//     localStorage.usrArr = JSON.stringify(usr)
//     let novaSnh = prompt("senha:")
//     snh.push(novaSnh)
//     localStorage.snhArr = JSON.stringify(snh)
//     if(usr.includes(novoUsr) && snh.includes(novaSnh)){
//         alert("Login criado com sucesso!")
//     }else{
//         alert("Login não pode ser criado!")
//     }
// }

// function abreTelaLogin(){
//     if(localStorage.usrArr){
//         usr = JSON.parse(localStorage.getItem('usrArr'))
//     }
//     if(localStorage.snhArr){
//         snh = JSON.parse(localStorage.getItem('snhArr'))
//     }
//     login = prompt("login:")
//     senha =  prompt("senha:")
//     let indUsr = usr.indexOf(login)
//     if(usr[indUsr] == login && snh[indUsr] == senha){
//         localStorage.setItem('loginAutenticado', login)
//         loginAut = localStorage.getItem('loginAutenticado')
//         document.getElementById("log").innerHTML = `Bem-vindo, ${loginAut}`
//     }else{
//         alert("Digite um usuário/senha válidos!\nOu crie um login no link ao lado")
//     }
// }

// function compra(qtdId, produt, posArr){
//     if(localStorage.posArr){
//         qtd[posArr] = parseInt(document.getElementById(qtdId).value)
//     }else{
//         localStorage.posArr = JSON.stringify(qtd)
//     }
//     totalCompra[posArr] = qtd[posArr] * parseFloat(document.getElementById(produt).innerText.replace(",", "."))
//     localStorage.qtdArr = JSON.stringify(qtd)
//     localStorage.totCompArr = JSON.stringify(totalCompra)
//     localStorage.setItem('produtoIndividual', produto[posArr])
//     localStorage.setItem('descricaoIndividual', descricao[posArr])
//     let url_atual = window.location.href
//     if(url_atual != "http://127.0.0.1:5500/produto.html" && url_atual != "http://127.0.0.1:5500/produto.html#"){
//         window.location.href = "/produto.html"
//     }
//     alert("Produto adicionado no carrinho!")
// }

// function abreLink(posArr){
//     localStorage.setItem('produtoIndividual', produto[posArr])
//     localStorage.setItem('descricaoIndividual', descricao[posArr])
//     let url_atual = window.location.href
//     if(url_atual != "http://127.0.0.1:5500/produto.html" && url_atual != "http://127.0.0.1:5500/produto.html#"){
//         window.location.href = "/produto.html"
//     }
// }

// function calculaCesta(){
//     usr = JSON.parse(localStorage.getItem('usrArr'))
//     loginAut = localStorage.getItem('loginAutenticado')
//     if(usr.includes(loginAut)){
//         let textoCarrinho = ''
//         for(i in qtd){
//             if(qtd[i] > 0){
//                 totalGeral += totalCompra[i]
//                 textoCarrinho += qtd[i] + " x " + preco[i].toFixed(2).replace('.', ',') + " - Boneco " + produto[i] + " R$ " + totalCompra[i].toFixed(2).replace('.', ',') + "\n"
//             }
//         }
//         if(totalGeral > 0){ //Apenas se houver alguma quantidade no carrinho
//             alert(`${textoCarrinho}
//                 _______________________________________________________________
//                 Total da compra                            R$ ${totalGeral.toFixed(2).replace('.', ',')}
//                         `)// parou aqui
//             let text = "Confirme ou cancele sua compra!\nPressione OK para comprar ou Cancelar para desistir da compra.";
//             if (confirm(text) == true) {
//                 alert("Compra efetuada com sucesso!");
//                 for(i in qtd){
//                     qtd[i] = 0
//                 }
//                 localStorage.qtdArr = JSON.stringify(qtd)
//                 window.location.reload()
//             } else {
//                 alert("Sua compra não foi realizada!");
//                 totalGeral = 0
//             }
//         }else{
//             alert("Seu carrinho está vazio!")
//         }
//     }else{
//         alert("Você não está logado!")
//     }
// }
// /***************************************************************************** */
// function carregaProduto(){
//     let produtoCompra = localStorage.getItem('produtoIndividual')
//     let descCompra = localStorage.getItem('descricaoIndividual')
//     let pos = produto.indexOf(produtoCompra)
//     document.getElementById("tituloProduto").innerHTML = produtoCompra
//     document.getElementById("descProduto").innerHTML = descCompra
//     document.getElementById('imgProd').style.backgroundImage = 'url(imagens/img' + pos + '.jpg)'
//     div2 = document.createElement('div')
//     div2.setAttribute('id', 'divProd')
//     div2.setAttribute('class', 'card')
//     document.body.append(div2)
//     p1 = document.createElement('p')
//     p1.innerHTML = 'Qtd: '
//     div2.append(p1)
//     input = document.createElement('input')
//     input.setAttribute('type', 'number')
//     input.setAttribute('value', '1')
//     input.setAttribute('min', '1')
//     input.setAttribute('max', '10')
//     input.setAttribute('id', 'qtd-' + pos)
//     p1.append(input)
//     p2 = document.createElement('p')
//     p2.innerHTML = 'R$ '
//     span = document.createElement('span')
//     span.setAttribute('id', cod[pos])
//     span.setAttribute('class', 'bold')
//     span.innerHTML = preco[pos].toFixed(2).replace('.', ',')
//     p2.append(span)
//     div2.append(p2)
//     aLink = document.createElement('a')
//     aLink.setAttribute('onclick', "compra(" + "'" + 'qtd-' + pos + "'" + ',' + "'" + cod[pos] + "'"  +  ',' + pos + ")")
//     aLink.setAttribute('class', 'btn')
//     aLink.setAttribute('href', '#')
//     aLink.innerHTML = 'Comprar'
//     div2.append(aLink)
//     let logB = localStorage.getItem('loginAutenticado')
//     if(logB == "null" || logB == "undefined"){
//         document.getElementById("log").innerHTML = 'login'
//     }else{
//         document.getElementById("log").innerHTML = `Bem-vindo, ${localStorage.getItem('loginAutenticado')}`
//     }
// }

// function getDadosClientes(){
//     var select = document.getElementById("uf");
//     var opcaoTexto = select.options[select.selectedIndex].text;
//     var opcaoValor = select.options[select.selectedIndex].value;
//     alert(opcaoTexto);
//     alert(opcaoValor);
//     email = document.getElementById("email").value
//     senha = document.getElementById("senha").value
//     nome = document.getElementById("nome").value
//     const dadosCliente = {
//         email : email,
//         senha : senha,
//         nome : nome
//     }
// alert(`${dadosCliente.email}, ${dadosCliente.senha}, ${nome}`)
// }
// /***************************************************************************** */

// Mostra os produtos na página
function montaHTML() {
    const container = document.querySelector('.container');
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    container.innerHTML = produtos.map(p => `
        <div class="card">
            <img src="${p.imagem || 'imagens/default.jpg'}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p class="price">R$ ${p.preco.toFixed(2).replace('.', ',')}</p>
            <p class="descricao">${p.descricao}</p>
            <button class="btn" onclick="adicionarCarrinho(${p.id})">Adicionar ao Carrinho</button>
            <a href="${p.link_amazon}" target="_blank" class="btn">Comprar na Amazon</a>
        </div>
    `).join('');
}

// Adiciona ao carrinho
function adicionarCarrinho(prodId) {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const produto = produtos.find(p => p.id === prodId);
    if (!produto) return alert("Produto não encontrado!");

    let item = carrinho.find(p => p.id === prodId);
    if (item) {
        item.qtd += 1;
    } else {
        carrinho.push({ ...produto, qtd: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${produto.nome} adicionado ao carrinho!`);
}

function calculaCesta() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    let totalGeral = 0;
    let texto = "Itens no carrinho:\n\n";

    carrinho.forEach(item => {
        const subtotal = item.preco * item.qtd;
        totalGeral += subtotal;
        texto += `${item.qtd}x ${item.nome} - R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    });

    texto += `\nTotal da compra: R$ ${totalGeral.toFixed(2).replace('.', ',')}`;

    const confirma = confirm(texto + "\n\nDeseja finalizar a compra?");
    if (confirma) {
        localStorage.removeItem('carrinho');
        alert("Compra efetuada com sucesso!");
        window.location.reload();
    }
}


// Mostra carrinho
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

// Inicializa
window.onload = montaHTML;
