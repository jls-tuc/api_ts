import { Request, Response } from 'express';
import * as personaSchema from '../../models/personas/persona';
import { getServicioRenaper } from '../../util/webServices/servicioRenaper';
import { savePersona, resizeFoto } from './personaCtrl';

export const getPersonaRenaper = async (req: Request, res: Response) => {
  console.log('Query Persona: ', req.body);

  let persona: any = await personaSchema.persona.find({
    dni: req.body.dni,
    sexo: req.body.sexo,
  });
  console.log('Encuentra persona: ', persona);
  if (persona.length === 0) {
    persona = await getServicioRenaper({
      documento: req.body.dni,
      sexo: req.body.sexo,
    });
    persona = await getServicioRenaper({
      documento: req.body.dni,
      sexo: req.body.sexo,
    });
    console.log('Encuentra persona RENAPER: ', persona);
    if (persona && persona.datos.nroError === 0) {
      persona.datos.sexo = req.body.sexo;
      persona.datos.dni = req.body.dni;
      persona.datos.cuil = persona.datos.cuil !== '' ? persona.datos.cuil : persona.datos.dni;
      persona.datos.foto = await resizeFoto(persona.datos.foto);

      await savePersona(persona.datos);
    }
    res.json(persona.datos);
  } else {
    persona[0].foto = await resizeFoto(persona[0].foto);
    res.json(persona[0]);
  }
};
