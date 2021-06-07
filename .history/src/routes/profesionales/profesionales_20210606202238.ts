import { Router } from 'express';

import { postProfesional, getProfesional, getByIdProfesional } from '../../controllers/profesionales/profesionales';
const route = Router();

route.post('/', postProfesional), route.get('/', getProfesional), route.get('/id:', getByIdProfesional);

export default route;
