import { Router } from 'express';

import { postProfesional, getProfesional, getByIdProfesional } from '../../controllers/profesionales/profesionales';
const route = Router();

route.post('/profesional', postProfesional),
  route.get('/profesional', getProfesional),
  route.get('/profesional/:id', getByIdProfesional);

export default route;
