const {Router, response, request} = require('express');
const router = Router();

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