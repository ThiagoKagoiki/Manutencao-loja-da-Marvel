function getClientes() {
    const data = localStorage.getItem('clientes');
    return data ? JSON.parse(data) : [];
  }

  function setClientes(clientes) {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }

  document.getElementById('form-login').addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    const login = form.login.value;
    const senha = form.senha.value;

    const clientes = getClientes();
    const usuario = clientes.find(c => c.login === login && c.senha === senha);

    if (!usuario) {
      alert('Login ou senha inválidos!');
      return;
    }

    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    alert(`Bem-vindo, ${usuario.nome}!`);
    form.reset();
    // Redirecionar para a página principal (ou dashboard)
    window.location.href = "index.html";
  });