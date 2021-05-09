const {Router} = require('express');
const router = Router();

router.post('/registro', (req,res) => {
    res.json({
        pagina:"nuevo usuario"
    })
})

module.exports= router;