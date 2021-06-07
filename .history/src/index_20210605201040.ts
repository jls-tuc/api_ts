import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

//rutas
import serverRoute from './routes/server';

class ServerSPS {
  private app: Application;
  private port: string;
  private apiPath = '/api';

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8001';

    //cargar rutas
    this.routes();
  }

  listen() {
    //Servidor Express
    this.app.listen(this.port, () => {
      console.info(`Servidor funcionando en: \x1b[32m${this.port}\x1b[0m`);
    });
  }

  middlewares() {
    //cors
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json());
    this.app.all('*', (req, res, next) => {
      // res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, X-Requested-With,Accept ');
      res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');

      // Permitir que el método OPTIONS funcione sin autenticación
      if ('OPTIONS' === req.method) {
        res.header('Access-Control-Max-Age', '1728000');
        res.sendStatus(200);
      } else {
        next();
      }
    });
  }
  //lista de rutas

  routes() {
    this.app.use(this.apiPath, serverRoute);
  }
}

export default ServerSPS;
