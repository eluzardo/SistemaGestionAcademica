
const { response } = require('express')
const { sqlConfig } = require('../conexionBBDD')
const sql = require('mssql')


const crearUsuario = async (req, res = response) => {
    try {

        const { nombre, apellido, mail, password, nombreUsuario } = req.body;
        const pool = new sql.ConnectionPool(sqlConfig);
        const poolConnect = await pool.connect();
        const ps = await pool.request()
            .input('nombre', nombre)
            .input('apellido', apellido)
            .input('mail', mail)
            .input('password', password)
            .input('nombreUsuario', nombreUsuario)
            .query("insert into usuarios (nombre,apellido,mail,password,nombreUsuario) values (@nombre,@apellido,@mail,@password,@nombreUsuario)")
        pool.close();

        res.json({
            "msj": "usuario insertado"
        })
    } catch (e) {
        console.log(e)
    }



}

const loginUsuario = async (req, res) => {

    const { nombreUsuario, password } = req.body;

    const pool = new sql.ConnectionPool(sqlConfig);
    const poolConnect = await pool.connect();
    const ps = await pool.request()
        .input('nombreUsuario', nombreUsuario)
        .input('password', password)
        .query("select * from usuarios where nombreUsuario = @nombreUsuario and password = @password", (err, response) => {
            if (err) {
                console.log('asdasda ' + err)
            }
            
            console.log(response)
            res.json({ "msj": "usuario logueado" })
            pool.close();
        });
}

const logoutUsuario = (req, res) => {
    res.json({
        pagina: "logout usuario"
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    logoutUsuario
}