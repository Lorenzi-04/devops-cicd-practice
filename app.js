const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.json({
    message: 'Hola Mundo!'
  });
});

// Ruta de salud
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Aplicación funcionando correctamente' });
});

// Función para iniciar el servidor
const startServer = () => {
  return app.listen(port, () => {
    console.log(`Servidor ejecutándose en puerto ${port}`);
  });
};

// Solo iniciar el servidor si este archivo se ejecuta directamente
if (require.main === module) {
  startServer();
}

module.exports = { app, startServer };
