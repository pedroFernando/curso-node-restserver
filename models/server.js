const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        //Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use( cors() );

        //Parseo y lectura del body
        this.app.use( express.json() );

        //Directorio Público
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use(this.usuariosRoutePath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
    }
}

module.exports = Server;