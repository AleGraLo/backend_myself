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
  const { number, type, price, availability, photo } = req.body;

  const room = new Room({ number, type, price, availability, photo }); 
  
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
