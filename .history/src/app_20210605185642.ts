import dotenv from 'dotenv';
import ServerSPS from './server';

dotenv.config();
const server = new ServerSPS();
server.listen();
