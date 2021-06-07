import { Router } from 'express';
import { postEdificio, getEdificio, getByIdEdificio } from '../../controllers/edificios/edificio';
const route = Router();

route.post('/edificio', postEdificio), route.get('/edificio', getEdificio), route.get('/edificio/:id', getByIdEdificio);

export default route;
