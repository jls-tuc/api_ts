import { Request, Response } from 'express';
import { paciente } from '../../models/pacientes/pacientes';

export const postPaciente = async (req: Request, res: Response) => {
  console.log('EntraPost', req.body);
  const newPaciente = new paciente(req.body);
  newPaciente.save((err, data) => {
    if (err) {
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
