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
    this.app.listen(this.port, () => {
      console.info(`Servidor funcionando en: \x1b[32m${this.port}\x1b[0m`);
    });
  }

  //lista de rutas

  routes() {
    this.app.use(this.apiPath, serverRoute);
  }
}

export default ServerSPS;
