const {Router} = require('express');
const {check} = require('express-validator')
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios');
const { validarCampos } = require('../middleware/validar-campos');
const { esRoleValido } = require('../helpers/db-validator');

const router = Router()

    router.get('/', usuariosGet) 
    
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
        usuariosPost
        ) 

    router.put('/:id', usuariosPut) 
    router.delete('/', usuariosDelete) 

    
module.exports = router