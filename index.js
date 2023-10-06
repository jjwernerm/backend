const express = require('express');
const cors = require('cors'); // Importa el middleware CORS

const app = express();
app.use(cors()); // Habilita CORS para todas las rutas
app.use(express.json())

// Importar las rutas desde el archivo "empleadosRoutes.js"
const configureRoutes = require('./routes/empleadoRoutes');
configureRoutes(app);

app.listen(3000, () => {
  console.log("SERVIDOR ENCENDIDO");
});