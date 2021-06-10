import { Request, Response } from 'express';
import { paciente } from '../../models/pacientes/pacientes';
import moment from 'moment';
import { getNro } from '../../util/numerador';

export const postPaciente = async (req: Request, res: Response) => {
  moment.locale('ARG');
  req.body.fechaAlta = moment().format('YYYY-MM-DD');
  const ultimoNroRegistro: any = await paciente.findOne().sort({ field: 'asc', _id: -1 }).limit(1);
  // console.log("1", ultimoNroRegistro);
  if (ultimoNroRegistro) {
    req.body.nroForm = await getNro(ultimoNroRegistro.nroForm);
    // console.log('2', req.body.nroForm);
  } else {
    req.body.nroForm = 1;
  }
  const newPaciente = new paciente(req.body);
  //console.log('EntraPost', newPaciente);
  newPaciente.save((err, data) => {
    if (err) {
      console.log('err', err);
      return res.json(err);
    }
    return res.json({
      ok: true,
      data,
    });
  });
};

export const getPaciente = async (req: Request, res: Response) => {
  console.log('getPaciente'),
    paciente.find((err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json({
        ok: true,
        data,
      });
    });
};

export const getByIdPaciente = async (req: Request, res: Response) => {
  console.log('GetIdPaciente');
  paciente.findById(req.body.id, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json({
      ok: true,
      data,
    });
  });
};
