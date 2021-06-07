import { Router } from 'express';
import { postAgenda, getAgenda, getByIdAgenda } from '../../controllers/turnos/agenda';

const route = Router();

route.post('/', postAgenda), route.get('/', getAgenda), route.get('/:id', getByIdAgenda);

export default route;
