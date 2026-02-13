const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("gastos.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS gastos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      monto REAL NOT NULL,
      categoria TEXT NOT NULL,
      fecha TEXT NOT NULL,
      descripcion TEXT
    )
  `);
});

module.exports = db;
