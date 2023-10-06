res.header('Access-Control-Allow-Origin', 'https://dancing-crumble-2291c4.netlify.app'); // Reemplaza con la URL correcta de tu front-end
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Agrega los métodos que tu aplicación utiliza
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

// También puedes configurar Access-Control-Allow-Credentials si es necesario
res.header('Access-Control-Allow-Credentials', 'true');

// Luego envía la respuesta
res.status(200).send('OK');


const express = require('express');
const cors = require('cors'); // Importa el middleware CORS

const app = express();
app.use(cors({ origin: 'https://dancing-crumble-2291c4.netlify.app/' })); // Habilita CORS para todas las rutas
app.options('*', cors()); // Manejar todas las solicitudes OPTIONS

app.use(express.json())

// Importar las rutas desde el archivo "empleadosRoutes.js"
const configureRoutes = require('./routes/empleadoRoutes');
configureRoutes(app);

app.listen(3000, () => {
  console.log("SERVIDOR ENCENDIDO OK");
});