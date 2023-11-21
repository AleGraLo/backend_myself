const {Schema, model} = require('mongoose')

const RoomSchema=Schema({
  number: {
    type: String,
    required:[true,'el numero de habitacion es obligatorio']

  },

  type: {
    type:String,
    enum:["SIMPLE","DOBLE","BUNGALOW_FAMILIAR"],
  },
  price: {
    type: String,
    required:[true],
  },
  availability: {
    type: Boolean,
    default: true,
  },
  photo: {
    type: String,
    required: [true],
  },

});

module.exports = model('Room', RoomSchema);