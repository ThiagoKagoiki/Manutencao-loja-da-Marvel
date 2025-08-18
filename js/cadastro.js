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
      nome: form.nome.value.trim(),
      sobrenome: form.sobrenome.value.trim(),
      login: form.login.value.trim().toLowerCase(),
      senha: form.senha.value.trim(),
      cpf: form.cpf.value.trim(),
      telefone: form.telefone.value.trim(),
      endereco: form.endereco.value.trim()
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
