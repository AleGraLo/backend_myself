const {request, response} = require('express')
const Usuario = require('../models/usuario')
const bcrypt = require("bcryptjs")

const usuariosGet = (req=request , res=response)=>{
    const {limit,page} = req.query
    res.json({
        message: "GET usuarios-controllers",
        limit,
        page,
    })
}
const usuariosPost = async (req = request, res) => {
    const { name, email, password, role } = req.body;
  
    const usuario = new Usuario({ name, email, password, role });
  
    //validar si el email existe
    const existeEmail = await Usuario.findOne({ email });
    if (existeEmail) {
      return res.status(400).json({
        msg: `El correo ${email} ya está registrado`,
      });
    }
        // Validar datos antes de crear el usuario

        const salt = bcrypt.genSaltSync(); // Establecer el número de rondas de encriptación
        usuario.password = bcrypt.hashSync(password, salt)

        await usuario.save();

        res.status(201).json({
            message: "Usuario creado",
            usuario,
        });
    }

const usuariosPut = (req=request , res)=>{

    const {id} = req.params
    res.json({
        message: "PUT usuarios-controllers",
        id,
    
    })
}

const usuariosDelete = (req =request , res=response)=>{
    res.json({
        message: "DELETE usuarios-controllers"
    })
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete    
}