const {Router, response, request} = require('express');
const bcryptjs = require('bcryptjs');


const router = Router();


//crear usuarios: post 
router.post('/', (req = request, res = response) => {

    const { password, ...data } = req.body;

    const salt = bcryptjs.genSaltSync(11);
    const newPassword = bcryptjs.hashSync( `${data.password}`, salt ) //codificacion de contraseña

   const newUser = {
        mesagge: 'Usuario creado satisfactoriamente',
        data
   }

   res.status(200).json( newUser );
});
//res : operador res, sacar el resto de info de objetos y arreglos en otro nuevo
//obtener usuarios:   get

router.get('/', (req = request, res = response) => {
    res.status(200).json({
        msg: 'obtener usuarios'
    })
});

//crear usuarios:     post 

router.post('/', (req = request, res = response) => {
    res.status(200).json({
        msg: 'crear usuarios'
    })
});


//obtener usuario por id:      get

router.get('/:id', (req = request, res = response) => {
    res.status(200).json({
        msg: 'obtener usuario por id'
    })
});

//actualizar usuario:      put
router.put('/:id', (req = request, res = response) => {
    res.status(200).json({
        msg: 'actualizar usuario por id'
    })
});

//eliminar usuario:        delate 
router.delete('/:id', (req = request, res = response) => {
    res.status(200).json({
        msg: 'eliminar usuario por id'
    })
});


module.exports = router;