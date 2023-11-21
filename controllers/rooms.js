const { request, response } = require('express');
const Room = require('../models/rooms'); 

const roomsGet = (req = request, res = response) => {
  const { limit, page } = req.query;
  res.json({
    message: 'GET rooms-controllers',
    limit,
    page,
  });
};

const roomsPost = async (req = request, res = response) => {
  const tipos= ["SIMPLE","DOBLE","BUNGALOW_FAMILIAR"]

  const { number, type, price, availability, photo } = req.body;

  //await

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

const roomsPut = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    message: 'PUT rooms-controllers',
    id,
  });
};

const roomsDelete = (req = request, res = response) => {
  res.json({
    message: 'DELETE rooms-controllers',
  });
};

module.exports = {
  roomsGet,
  roomsPost,
  roomsPut,
  roomsDelete,
};
