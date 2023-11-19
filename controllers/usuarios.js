const {request, response} = require('express')
const Usuario = require('../models/usuario')

const usuariosGet = (req=request , res=response)=>{
    const {limit,page} = req.query
    res.json({
        message: "GET usuarios-controllers",
        limit,
        page,
    })
}

const usuariosPost = async (req=request, res)=>{
    const {name, email, password} = req.body

    const usuario=new Usuario({name, email, password})
        
    await usuario.save()

    res.status(201).json({
        message: "Usuario creado",
        usuario,
    })
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