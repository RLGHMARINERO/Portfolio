const express = require('express');
const path = require('path');
const app = express();

// Sirve archivos estáticos
app.use(express.static(path.join(__dirname, 'build')));

// Maneja todas las rutas
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});