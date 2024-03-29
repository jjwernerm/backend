const express = require('express');
const cors = require('cors'); // Importa el middleware CORS

const app = express();
app.use(cors({ origin: 'https://dancing-crumble-2291c4.netlify.app' }));
app.use(express.json());

// Importar las rutas desde el archivo "empleadosRoutes.js"
const configureRoutes = require('./routes/empleadoRoutes');
configureRoutes(app);

app.listen(3000, () => {
  console.log("SERVIDOR ENCENDIDO");
});