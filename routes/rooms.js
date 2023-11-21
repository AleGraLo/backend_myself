const {Router} = require('express');
const {check} = require('express-validator')
const { roomsGet, roomsPost, roomsPut, roomsDelete } = require('../controllers/rooms');
const { validarCampos } = require('../middleware/validar-campos');

const router = Router()

    router.get('/', roomsGet) 
    
    router.post('/',
    [
        check("number","El numero de habitación es obligatorio").notEmpty(), 
        check("type","El tipo de habitación es obligatorio").notEmpty(), 
        check("price" ,"El precio por noche es obligatorio").notEmpty(), 
        validarCampos,
        ],
        roomsPost
 ) 

    router.put('/:id', roomsPut) 
    router.delete('/', roomsDelete) 

    
module.exports = router