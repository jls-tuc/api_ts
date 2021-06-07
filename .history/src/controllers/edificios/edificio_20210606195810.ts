import { Request, Response } from 'express';
import { edificio } from '../../models/edificios/edificio';

export const postEdificio = async (req: Request, res: Response) => {
  console.log('EntraPost', req.body);
  const newEdifcio = new edificio(req.body);
  newEdifcio.save((err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json({
      ok: true,
      data,
    });
  });
};

export const getEdificio = async (req: Request, res: Response) => {
  console.log('getEdi'),
    edificio.find((err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json({
        ok: true,
        data,
      });
    });
};

export const getByIdEdificio = async (req: Request, res: Response) => {
  console.log('GetIdEdificio');
  edificio.findById(req.body.id, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json({
      ok: true,
      data,
    });
  });
};
