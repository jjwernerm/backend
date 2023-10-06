const {
  agregarEmpleadoController,
  // consultarEmpleadoController,
  // consultarEmpleadosController,
  // modificarEmpleadoController,
  // eliminarEmpleadoController
} = require('../controllers/empleadoControllers');

module.exports = (app) => {
  app.post("/empleado", agregarEmpleadoController);
  // app.get("/empleados/:id", consultarEmpleadoController);
  // app.get("/empleados", consultarEmpleadosController);
  // app.put("/empleados/:id", modificarEmpleadoController);
  // app.delete("/empleados/:id", eliminarEmpleadoController);
};