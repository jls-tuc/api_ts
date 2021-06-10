import { Request, Response } from 'express';
import { profesional } from '../../models/profesionales/profesionales';
import moment from 'moment';
import { getNro } from '../../util/numerador';

export const postProfesional = async (req: Request, res: Response) => {
  moment.locale('ARG');
  req.body.fechaAlta = moment().format('YYYY-MM-DD');
  const ultimoNroRegistro: any = await profesional.findOne().sort({ field: 'asc', _id: -1 }).limit(1);
  // console.log("1", ultimoNroRegistro);
  if (ultimoNroRegistro) {
    req.body.nroForm = await getNro(ultimoNroRegistro.nroForm);
    // console.log('2', req.body.nroForm);
  } else {
    req.body.nroForm = 1;
  }
  const newProfesional = new profesional(req.body);
  console.log('EntraPost', newProfesional);
  newProfesional.save((err, data) => {
    if (err) {
      console.log(`err`, err);
      return res.json(err);
    }
    return res.json({
      ok: true,
      data,
    });
  });
};

export const getProfesional = async (req: Request, res: Response) => {
  console.log('getProfesional'),
    profesional.find((err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json({
        ok: true,
        data,
      });
    });
};

export const getByIdProfesional = async (req: Request, res: Response) => {
  console.log('GetIdProfesional');
  profesional.findById(req.body.id, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json({
      ok: true,
      data,
    });
  });
};
