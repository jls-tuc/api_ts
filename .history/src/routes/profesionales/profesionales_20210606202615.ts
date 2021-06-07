import { Router } from 'express';

import { postProfesional, getProfesional, getByIdProfesional } from '../../controllers/profesionales/profesionales';
const route = Router();

route.post('/profesionales', postProfesional),
  route.get('/profesionales', getProfesional),
  route.get('/profesionales/:id', getByIdProfesional);

export default route;
