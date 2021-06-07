import { Router } from 'express';
import { postPaciente, getPaciente, getByIdPaciente } from '../../controllers/pacientes/pacientes';

const route = Router();

route.post('/', postPaciente), route.get('/', getPaciente), route.get('/', getByIdPaciente);

export default route;
