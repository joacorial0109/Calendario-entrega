const db = require("./database");

const form = document.getElementById("formGasto");
const btnVolver = document.getElementById("btnVolver");

// Setear fecha de hoy por defecto
document.getElementById("fecha").valueAsDate = new Date();

btnVolver.addEventListener("click", () => {
  window.location = "index.html";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const monto = document.getElementById("monto").value;
  const categoria = document.getElementById("categoria").value.trim();
  const fecha = document.getElementById("fecha").value;
  const descripcion = document.getElementById("descripcion").value.trim();

  db.run(
    `INSERT INTO gastos (monto, categoria, fecha, descripcion)
     VALUES (?, ?, ?, ?)`,
    [monto, categoria, fecha, descripcion || null],
    (err) => {
      if (err) {
        alert("Error al guardar gasto");
        console.error(err);
        return;
      }

      window.location = "index.html";
    }
  );
});
