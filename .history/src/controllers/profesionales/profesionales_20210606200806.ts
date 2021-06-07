import { Request, Response } from 'express';
import { profesional } from '../../models/profesionales/profesionales';

export const postProfesional = async (req: Request, res: Response) => {
  console.log('EntraPost', req.body);
  const newProfesional = new profesional(req.body);
  newProfesional.save((err, data) => {
    if (err) {
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
