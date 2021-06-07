import { Router } from 'express';
import { postPaciente, getPaciente, getByIdPaciente } from '../../controllers/pacientes/pacientes';

const route = Router();

route.post('/paciente', postPaciente), route.get('/paciente', getPaciente), route.get('/paciente/:id', getByIdPaciente);

export default route;
