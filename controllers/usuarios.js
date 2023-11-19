const {request, response} = require('express')

const usuariosGet = (req=request , res=response)=>{
    const {limit,page} = req.query
    res.json({
        message: "GET usuarios-controllers",
        limit,
        page,
    })
}

const usuariosPost = (req=request , res)=>{
    const {nombre, correo} = req.body
    res.json({
        message: "POST usuarios-controllers",
        nombre,
        correo,
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