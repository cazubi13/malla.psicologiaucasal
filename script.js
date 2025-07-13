const materias = [
  {
    codigo: "07 0020",
    nombre: "Psicología General",
    correlativasCursada: [],
    correlativasFinal: []
  },
  {
    codigo: "07 0150",
    nombre: "Psic. Evolutiva Niño",
    correlativasCursada: ["07 0020", "07 0260"],
    correlativasFinal: ["07 0020", "07 0260"]
  },
  {
    codigo: "07 0260",
    nombre: "Neuropsicología",
    correlativasCursada: [],
    correlativasFinal: []
  }
];

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  materias.forEach((materia) => {
    const div = document.createElement("div");
    div.classList.add("materia");
    div.textContent = `${materia.nombre}\n(${materia.codigo})`;
    div.dataset.codigo = materia.codigo;

    const estado = localStorage.getItem(materia.codigo);
    if (estado === "regular") div.classList.add("estado-regular");
    if (estado === "final") div.classList.add("estado-final");

    // Hover
    div.addEventListener("mouseover", () => {
      materia.correlativasCursada.forEach(cod => {
        document.querySelector(`[data-codigo="${cod}"]`)?.classList.add("cursada");
      });
      materia.correlativasFinal.forEach(cod => {
        document.querySelector(`[data-codigo="${cod}"]`)?.classList.add("aprobada");
      });
    });

    div.addEventListener("mouseout", () => {
      document.querySelectorAll(".cursada").forEach(el => el.classList.remove("cursada"));
      document.querySelectorAll(".aprobada").forEach(el => el.classList.remove("aprobada"));
    });

    // Clics para marcar estados
    div.addEventListener("click", () => {
      const actual = localStorage.getItem(materia.codigo);
      if (!actual) {
        div.classList.add("estado-regular");
        localStorage.setItem(materia.codigo, "regular");
      } else if (actual === "regular") {
        div.classList.remove("estado-regular");
        div.classList.add("estado-final");
        localStorage.setItem(materia.codigo, "final");
      } else {
        div.classList.remove("estado-final");
        localStorage.removeItem(materia.codigo);
      }
    });

    contenedor.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", crearMalla);
