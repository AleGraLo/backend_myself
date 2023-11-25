const Role = require("../models/role");
const Room = require("../models/rooms")

const esRoleValido = async (role="USER_ROLE") => {
  const existeRole = await Role.findOne({ role });
  if (!existeRole) {
    throw new Error(`El rol ${role} no está registrado en la BD`);
  }
};

  //validar si numero habitación ya existe
  const existeRoom = async (number)=>{
    const existeRoom = await Room.findOne({number})
    if (existeRoom){
      throw new Error(`La habitación ${number} ya existe en la BD.`)
    }
  }

  //validar si habitación ya existe
  const existeRoomPorId = async (id)=>{
    const existeRoom = await Room.findById(id)
    if (!existeRoom
      ){
      throw new Error(`El id No existe en la BD.`)
    }
  }

  

module.exports = {
  esRoleValido,
  existeRoom,
  existeRoomPorId
};