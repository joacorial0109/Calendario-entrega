const db = require("./database");

const tabla = document.getElementById("tablaGastos");
const totalSpan = document.getElementById("total");
const mesSelect = document.getElementById("mes");
const anioSelect = document.getElementById("anio");
const btnAgregar = document.getElementById("btnAgregar");

// Botón a pantalla de alta
btnAgregar.addEventListener("click", () => {
  window.location = "add.html";
});

// Cargar meses 01..12
for (let i = 1; i <= 12; i++) {
  const opt = document.createElement("option");
  opt.value = String(i).padStart(2, "0");
  opt.textContent = String(i);
  mesSelect.appendChild(opt);
}

// Cargar años (simple)
const currentYear = new Date().getFullYear();
for (let y = currentYear - 2; y <= currentYear + 1; y++) {
  const opt = document.createElement("option");
  opt.value = String(y);
  opt.textContent = String(y);
  anioSelect.appendChild(opt);
}

// Setear mes/año actual por defecto
mesSelect.value = String(new Date().getMonth() + 1).padStart(2, "0");
anioSelect.value = String(currentYear);

mesSelect.addEventListener("change", cargarGastos);
anioSelect.addEventListener("change", cargarGastos);

function cargarGastos() {
  tabla.innerHTML = "";
  totalSpan.textContent = "0";

  const mes = mesSelect.value;   // "01".."12"
  const anio = anioSelect.value; // "2026"

  db.all(
    `SELECT * FROM gastos
     WHERE strftime('%m', fecha) = ?
       AND strftime('%Y', fecha) = ?
     ORDER BY fecha DESC`,
    [mes, anio],
    (err, rows) => {
      if (err) {
        alert("Error al cargar gastos");
        console.error(err);
        return;
      }

      let total = 0;

      rows.forEach((g) => {
        total += Number(g.monto);

        const tr = document.createElement("tr");

        tr.innerHTML = `
          <td>${g.fecha}</td>
          <td>${g.categoria}</td>
          <td>$${g.monto}</td>
          <td>${g.descripcion ? g.descripcion : ""}</td>
        `;

        tabla.appendChild(tr);
      });

      totalSpan.textContent = total.toFixed(2);
    }
  );
}

cargarGastos();
