const express = require('express');
const dbConnection = require('../database/databaseConfig');

class Server {

    constructor() {
        // VARIABLES DE CLASE - NO REPETICIÓN
        //protocolo UDP : CONEXIONES DE HTTP
        this.app = express();
        this.port = process.env.PORT || 8000;
        this.paths = {
             usuarios: '/api/usuarios'
        }
        
        //mandar a llamar métodos
        this.middlewares();
        this.routes();
        this.connectiondb();
    }

    //CREACIÓN DE MÉTOODOS

    async connectiondb(){
        await dbConnection()
    }

    middlewares(){
        //parseo(forzar a cambiar los datos) y lectura del body
        this.app.use( express.json() );

        //directorio publico 
        this.app.use( express.static('public') );
    }
    
    routes(){

        this.app.use( this.paths.usuarios, require('../routes/usuarios') );
    }

    listen(){

        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });

    }
}

module.exports = Server;