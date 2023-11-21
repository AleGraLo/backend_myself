const Role = require("../models/role");
const Room = require("../models/rooms")

const esRoleValido = async (role="USER_ROLE") => {
  const existeRole = await Role.findOne({ role });
  if (!existeRole) {
    throw new Error(`El rol ${role} no está registrado en la BD`);
  }
};

const roomIs= async(number)=>{
  const isRoom = await Room.findOne({number})
  if (isRoom) {
      throw new Error(`La habitación ${number} ya está registrada en la BD`)
    }
  }


module.exports = {
  esRoleValido,
  roomIs,
};