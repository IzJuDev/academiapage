function adicionarProduto() {
    const link = document.getElementById("linkInput").value;
    const img = document.getElementById("imgInput").value;

    if (!link || !img) {
        alert("Preencha os campos!");
        return;
    }

    const lista = document.getElementById("listaProdutos");

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${img}">
    <br><br>
    <a href="${link}" target="_blank">
      <button>Ver Produto</button>
    </a>
  `;

    lista.appendChild(card);

    document.getElementById("linkInput").value = "";
    document.getElementById("imgInput").value = "";
}