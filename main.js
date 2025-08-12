const pegarDados = document.getElementById('pegarDados')
const enviarDados = document.getElementById('enviarDados')
const exibirNaLista = document.querySelector('.exibirNaLista')
const listaDeDados = []

function atualizarLista() {
  exibirNaLista.innerHTML = ''  // Limpa a lista

  listaDeDados.forEach(function(item, index) {
    mostrarNaTela(item, index)
  })
}

function mostrarNaTela(item, index) {
  const separandoElementos = document.createElement('p')
  separandoElementos.textContent = item

  const criandoBotaoApagar = document.createElement('button')
  criandoBotaoApagar.textContent = 'Excluir'

  // Evento para remover item pelo índice e atualizar lista
  criandoBotaoApagar.addEventListener('click', function() {
    listaDeDados.splice(index, 1)
    atualizarLista()
  })

  separandoElementos.appendChild(criandoBotaoApagar)
  exibirNaLista.appendChild(separandoElementos)
}

enviarDados.addEventListener('click', function() {
  if (pegarDados.value.trim() !== '') {
    listaDeDados.push(pegarDados.value)
    pegarDados.value = ''
    atualizarLista()
  }
})
