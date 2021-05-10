const express = require('express');
const app = express();
require('dotenv').config();



//directorio publico
app.use(express.static('public'))

//Lectura y parse de body
app.use (express.json())

//Rutas
app.use('/api/auth', require('./routes/auth'));





app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo')
});



