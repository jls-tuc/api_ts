import { Router } from 'express';
import { postAgenda, getAgenda, getByIdAgenda } from '../../controllers/turnos/agenda';

const route = Router();

route.post('/agenda', postAgenda), route.get('/agenda', getAgenda), route.get('/agenda/:id', getByIdAgenda);

export default route;
