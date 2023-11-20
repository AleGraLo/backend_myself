const {Router} = require('express');
const {check} = require('express-validator')
const { roomsGet, roomsPost, roomsPut, roomsDelete } = require('../controllers/rooms');
const { validarCampos } = require('../middleware/validar-campos');
const { esRoleValido } = require('../helpers/db-validator');

const router = Router()

    router.get('/', roomsGet) 
    
    router.post('/',
        [
        check("name","El nombre es obligatorio").notEmpty(), 
        check("password", "la contraseña debe tener más de 6 caracteres").isLength
        ({
            min: 6,
        }),
        check("email","El email no es valido").isEmail(),
        // check("role","No es un rol válido").isIn(["USER_ROLE","ADMIN_ROLE"])
        check("role").custom(esRoleValido),
        validarCampos,
        ],
        roomsPost
        ) 

    router.put('/:id', roomsPut) 
    router.delete('/', roomsDelete) 

    
module.exports = router