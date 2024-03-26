//Importar bibliotecas
const { getConnection } = require("./dbConnection");

//Endpoint Listado todos los animales en adopción: 

exports.create = async (req, res) => {
    try {
      //1. conectar a la base de datos:
      const conn = await getConnection();
  
      //2. Lanzar un SELECT para recuperar todas las recetas de la bbdd:
      const queryGetAdopcion = `
            SELECT * FROM animales
            WHERE adopcion='si'
          `;
  
      //3. Obtenemos resultados:
      const [results] = await conn.query(queryGetAdopcion);

      // 4. Cerramos conexión a la base de datos:
      conn.close();
  
      // 5. Devuelvo un json con los resultados:
      res.json({
        // número de elementos
        info: `Listado de Animales en adopción`,
        "número de Animales": results.length,
        // listado
        results: results,
      });
    } catch (error) {
      res.json({
        success: false,
        error:
          "Ha habido un error en la base de datos. Por favor, vuelve a intentarlo más tarde. Gracias.",
      });
    }
  };