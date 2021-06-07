import { Router } from 'express';
import { postEdificio, getEdificio, getByIdEdificio } from '../../controllers/edificios/edificio';
const route = Router();

route.post('/', postEdificio), route.get('/', getEdificio), route.get('/:id', getByIdEdificio);

export default route;
