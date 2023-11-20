const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  photoURL: {
    type: String,
    required: true,
  },
  // Puedes añadir más campos según las necesidades (por ejemplo, disponibilidad en fechas específicas)
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
