const {request, response} = require('express')
const rooms = require('../models/rooms')
const bcrypt = require("bcryptjs")

const roomsGet = (req=request , res=response)=>{
    const {limit,page} = req.query
    res.json({
        message: "GET rooms-controllers",
        limit,
        page,
    })
}
const roomsPost = async (req = request, res) => {
    const { name, email, password, role } = req.body;
  
    const rooms = new rooms({ name, email, password, role });
  
    //validar si el email existe
    const existeEmail = await rooms.findOne({ email });
    if (existeEmail) {
      return res.status(400).json({
        msg: `El correo ${email} ya está registrado`,
      });
    }
        // Validar datos antes de crear el rooms

        const salt = bcrypt.genSaltSync(); // Establecer el número de rondas de encriptación
        rooms.password = bcrypt.hashSync(password, salt)

        await rooms.save();

        res.status(201).json({
            message: "rooms creado",
            rooms,
        });
    }

const roomsPut = (req=request , res)=>{

    const {id} = req.params
    res.json({
        message: "PUT rooms-controllers",
        id,
    
    })
}

const roomsDelete = (req =request , res=response)=>{
    res.json({
        message: "DELETE rooms-controllers"
    })
}

module.exports={
    roomsGet,
    roomsPost,
    roomsPut,
    roomsDelete    
}