const { request, response } = require('express');
const Room = require('../models/rooms'); 

const roomsGet = async(req = request, res = response) => {
  const { limite=5, desde=0 } = req.query;

  //promise.all()agrupar promesas

  const [total, room] = await Promise.all([
    Room.countDocuments({availability:true}),
    Room.find({availability:true}).limit(limite).skip(desde)  
  ])

  res.status(200).json({
    total,
    room
  });
};


const roomsPost = async (req = request, res = response) => {
  const tipos= ["SIMPLE","DOBLE","BUNGALOW_FAMILIAR"]

  const { number, type, price, availability, photo } = req.body;

  if(!tipos.includes(type.toUpperCase())){
    return res.status(401).json({
      msg:`El tipo de habitación no pertenece a ${tipos}`
    })
  }
  const tipo=type.toUpperCase()
  const room = new Room({ number,type:tipo, price, availability, photo }); 
  
  await room.save()

  res.status(201).json({
      message: "Habitacion creado",
      room,
  });
}

const roomsPut = async (req = request, res = response) => {
  const { id } = req.params;

  const{_id, price, photo,...resto} = req.body

  await Room.findByIdAndUpdate(id, resto)

  res.status(200).json({
    message: 'datos habitación actualizados',
    resto,
  });

};

const roomsDelete = async(req = request, res = response) => {
const{id}= req.params

//borrado fisico.
//const roomBorrada = await Room.findByIdAndDelete(id)

//inactivar un documento.
await Room.findByIdAndUpdate(
  id, {availability:false,}, {new:true})
  
res.status(200).json({
    message: 'Rooms eliminada',
  });
};

module.exports = {
  roomsGet,
  roomsPost,
  roomsPut,
  roomsDelete,
};
