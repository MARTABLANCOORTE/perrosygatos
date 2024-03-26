const mysql = require('mysql2/promise');
require('dotenv').config()

// CONFIGURACIÓN DE MYSQL

async function getConnection() {
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DB,
    });
  
    await connection.connect();
  
    // console.log(
    //   `Conexión establecida con la base de datos (identificador=${connection.threadId})`
    // );
  
    return connection;
}

exports.getConnection = getConnection;

