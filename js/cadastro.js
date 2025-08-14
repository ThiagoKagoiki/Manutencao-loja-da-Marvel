function getClientes() {
    const data = localStorage.getItem('clientes');
    return data ? JSON.parse(data) : [];
  }

  function setClientes(clientes) {
    localStorage.setItem('clientes', JSON.stringify(clientes));
  }

  document.getElementById('form-cadastro').addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;

    const novoCliente = {
      nome: form.nome.value,
      sobrenome: form.sobrenome.value,
      login: form.login.value,
      senha: form.senha.value,
      cpf: form.cpf.value,
      telefone: form.telefone.value,
      endereco: form.endereco.value
    };

    const clientes = getClientes();
    if (clientes.some(c => c.login === novoCliente.login)) {
      alert('Login já existe!');
      return;
    }

    clientes.push(novoCliente);
    setClientes(clientes);
    alert('Cadastro realizado com sucesso!');
    form.reset();
    window.location.href = "login.html"; // redireciona para login
  });