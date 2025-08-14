// admin.js

// Seleciona o formulário
const imagens = [
    'img0.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg',
    'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg',
    'img10.jpg', 'img11.jpg', 'img12.jpg'
];

let imgIndex = 0; // índice da próxima imagem a usar

const form = document.getElementById('form-prod');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const produto = {
        nome: form.nome.value,
        codigo: form.codigo.value,
        preco: parseFloat(form.preco.value),
        link_amazon: form.link_amazon.value,
        descricao: form.descricao.value,
        imagem: imagens[imgIndex] // pega a imagem atual
    };

    // Salva no localStorage
    const produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));

    // Incrementa o índice para a próxima imagem
    imgIndex++;
    if (imgIndex >= imagens.length) imgIndex = 0; // reinicia se acabar as imagens

    // Limpa o formulário
    form.reset();

    alert('Produto adicionado com sucesso!');
});