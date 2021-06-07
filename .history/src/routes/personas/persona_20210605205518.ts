import { Router } from 'express';
import { getPersonaRenaper } from '../../controllers/personas/persona';

const route = Router();
route.get('/', getPersonaRenaper);

export default route;
