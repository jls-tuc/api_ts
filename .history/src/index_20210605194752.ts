import express, { Application } from 'express';

class ServerSPS {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8001';
  }

  listen() {
    console.log('Funciona', aaaa);
    this.app.listen(this.port, () => {
      console.info(`Servidor funcionando en: \x1b[32m${this.port}\x1b[0m`);
    });
  }
}

export default ServerSPS;
