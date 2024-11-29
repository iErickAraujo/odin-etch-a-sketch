document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid-container");
  const newGridBtn = document.getElementById("newGridBtn");

  // cria o grid
  function createGrid(size) {
    grid.innerHTML = "";
    grid.style.setProperty(
      "grid-template-columns",
      `repeat(${size}, 1fr)`
    );
    grid.style.setProperty("grid-template-rows", `repeat(${size}, 1fr)`);

    for (let i = 0; i < size * size; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      // adiciona e remove o evento de mudança de cor ao passar o mouse
      gridItem.addEventListener("mouseover", () => {
        gridItem.style.backgroundColor = "black";
        gridItem.classList.add("grid-item-active");
        setTimeout(() => {
          gridItem.classList.remove("grid-item-active");
        }, 250); // ajuste o tempo de duração da animação
      });

      grid.appendChild(gridItem);
    }
  }

  //chama o prompt e valida a entrada
  newGridBtn.addEventListener("click", () => {
    let newSize = parseInt(
      prompt(
        "Digite o número de quadrados por lado (mínimo 2 e máximo 100):"
      ),
      10
    );
    // chama a funcao de validação
    promptInputValid(newSize);
  });

  // valida o input
  function promptInputValid(newSize) {
    if (newSize > 1 && newSize < 101) {
      createGrid(newSize);
    } else {
      alert("Número inválido, usando o valor padrão (16).");
      // createGrid(16);
    }
  }

  createGrid(16); // cria a grade inicial

  const resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", () => createGrid(16));
});