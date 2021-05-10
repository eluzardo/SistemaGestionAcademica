const {Router} = require('express');
const router = Router();

const {crearUsuario,loginUsuario,logoutUsuario} = require('../controllers/auth')

router.post('/registro', crearUsuario)

router.post('/login', loginUsuario)

router.get('/logout', logoutUsuario)

module.exports= router;