const {
  agregarEmpleado,
  // consultarEmpleado,
  // consultarEmpleados,
  // modificarEmpleado,
  // eliminarEmpleado
} = require('../services/empleadoServices');

const agregarEmpleadoController =  async (req, res) => {
  try {
    const { id_empleado, nombre_empleado } = req.body
    await agregarEmpleado(id_empleado, nombre_empleado);
    res.send(`El empleado ${ nombre_empleado } con el id ${ id_empleado } ha sido AGREGADO con éxito.`);
  } catch (error) {
    const { code } = error;
    if (code == "23502") {
      res.status(400)
        .send("Se ha violado la restricción NOT NULL en uno de los campos de la tabla");
    } else {
        res.status(500).send(error);
    };    
  };  
};

// const consultarEmpleadoController =  async (req, res) => {
//   const { id } = req.params;
//   const empleado = await consultarEmpleado(id);
//   res.json(empleado);
// };

// const consultarEmpleadosController =  async (req, res) => {
//   const empleado = await consultarEmpleados();
//   res.json(empleado);
// };

// const modificarEmpleadoController =  async (req, res) => {
//   const { id } = req.params;
//   const { nombre, cargo } = req.body;
//   try {
//     await modificarEmpleado(nombre, cargo, id);
//     res.send(`Los datos del empleado con el id ${ id } fue modificado con éxito`); 
//   } catch ({ code, message }) {
//     res.status(code).send(message);
//   };
// };

// const eliminarEmpleadoController =  async (req, res) => {
//   const { id } = req.params;
//   await eliminarEmpleado(id);
//   res.send(`El empleado con el id ${ id } fue eliminado con éxito`);
// };

module.exports = {
  agregarEmpleadoController,
  // consultarEmpleadoController,
  // consultarEmpleadosController,
  // modificarEmpleadoController,
  // eliminarEmpleadoController
};