require('dotenv').config();
const sql = require('mssql')
const { USER, PASSWORD, DATABASE, SERVER } = process.env

const sqlConfig = {
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    server: SERVER,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}


const conexionSQL = async function conectar() {
    try {
        const conexion = await sql.connect(sqlConfig)
        console.log('Conexion OKa')
        return conexion
    } catch (e) {
        console.log(e)
        throw new Error('Error')
    }



}

module.exports = {
    conexionSQL,
    sqlConfig
}


