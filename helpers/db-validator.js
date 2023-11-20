const Role = require("../models/role");

const esRoleValido = async (role="USER_ROLE") => {
  const existeRole = await Role.findOne({ role });
  if (!existeRole) {
    throw new Error(`El rol ${role} no está registrado en la BD`);
  }
};

module.exports = {
  esRoleValido,
};