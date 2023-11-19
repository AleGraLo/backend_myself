const express = require("express");
const cors = require('cors')
const {dbConnection}=require('../database/config')

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'
        this.conectarDB();
        this.middlewares();
        this.routes(); // Llama a la función routes en el constructor
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares (){
        //CORS
        this.app.use(cors())

        //leer datos cuerpo formato json
        this.app.use(express.json())

        // Añade tus middlewares aquí si los tienes
        this.app.use(express.static('public'))
    }
    
    routes(){
        this.app.use(this.usuariosPath,require ('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor en línea en el puerto:", this.port);
        });
    }
}

module.exports = Server;
