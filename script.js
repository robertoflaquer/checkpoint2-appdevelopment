function formatarData(data) {
  // data chega como "1979-08-27", então basta reordenar as partes
  const partes = data.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function renderizar(lista) {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  for (const ator of lista) {
    grid.innerHTML += `
      <div class="card">
        <img src="${ator.foto}" alt="Foto de ${ator.nome}">
        <h3>${ator.nome}</h3>
        <p>${ator.pais}</p>
        <p>Nascimento: ${formatarData(ator.nascimento)}</p>
      </div>
    `;
  }

  document.getElementById("contador").innerText = lista.length + " de " + atores.length + " exibidos";

  if (lista.length === 0) {
    grid.innerHTML = "<p class='vazio'>Nenhum ator ou atriz encontrado.</p>";
  }
}

function filtrar() {
  const texto = document.getElementById("busca").value.toLowerCase();

  const resultado = atores.filter(function (ator) {
    return ator.nome.toLowerCase().includes(texto);
  });

  renderizar(resultado);
}

renderizar(atores);
