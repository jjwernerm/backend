const pool = require('../database/db');

const agregarEmpleado = async (id_empleado, nombre_empleado) => {
  const consulta = "INSERT INTO empleado (id_empleado, nombre_empleado) VALUES ($1, $2)";
  const values = [id_empleado, nombre_empleado];
  const result = await pool.query(consulta, values);
};

// const consultarEmpleado = async (id) => {
//   const consulta = "SELECT * FROM empleados WHERE id = $1";
//   const values = [id];
//   const result = await pool.query(consulta, values);
//   const [empleado] = result.rows;
//   return empleado;
// };

// const consultarEmpleados = async () => {
//   const { rows } = await pool.query("SELECT * FROM empleados");
//   console.log(rows);
//   return rows;
// };

// const modificarEmpleado = async (nombre, cargo, id) => {
//   const consulta = "UPDATE empleados SET nombre = $1, cargo = $2 WHERE id = $3";
//   const values = [nombre, cargo, id];
//   const { rowCount } = await pool.query(consulta, values);
//   if (rowCount === 0) {
//     throw { code: 404, message: `No se consiguió ningún empleado con el id ${ id }`};
//     }
// };

// const eliminarEmpleado = async (id) => {
//   const consulta = "DELETE FROM empleados WHERE id = $1";
//   const values = [id];
//   const result = await pool.query(consulta, values);
// };

module.exports = {  
  agregarEmpleado, 
  // consultarEmpleado,
  // consultarEmpleados,
  // modificarEmpleado,
  // eliminarEmpleado
};