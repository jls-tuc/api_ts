import * as express from 'express';

class ServerSPS {
  private app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8001';
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor funcionando en: \x1b[32m${this.port}\x1b[0m`);
    });
  }
}

export default ServerSPS;
