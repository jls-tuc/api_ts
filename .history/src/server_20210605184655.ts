import * as express from 'express';

class Server {
  private app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '8000';
  }

  lister() {
    this.app.listen(this.port, () => {
      console.info(`Server listening at \x1b[32m${this.port}\x1b[0m`);
    });
  }
}

export default Server;
