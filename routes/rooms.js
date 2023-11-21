const {Router} = require('express');
const {check} = require('express-validator')
const { roomsGet, roomsPost, roomsPut, roomsDelete } = require('../controllers/rooms');
const { validarCampos } = require('../middleware/validar-campos');
const { esRoleValido } = require('../helpers/db-validator');

const router = Router()

    router.get('/', roomsGet) 
    
    router.post('/',roomsPost ) 

    router.put('/:id', roomsPut) 
    router.delete('/', roomsDelete) 

    
module.exports = router