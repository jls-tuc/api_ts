import { Request, Response } from 'express';
import { agenda } from '../../models/turnos/agenda';

export const postAgenda = async (req: Request, res: Response) => {
  console.log('EntraPost', req.body);
  const newAgenda = new agenda(req.body);
  newAgenda.save((err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json({
      ok: true,
      data,
    });
  });
};

export const getAgenda = async (req: Request, res: Response) => {
  console.log('getAgenda'),
    agenda.find((err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.json({
        ok: true,
        data,
      });
    });
};

export const getByIdAgenda = async (req: Request, res: Response) => {
  console.log('GetIdAgenda');
  agenda.findById(req.body.id, (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json({
      ok: true,
      data,
    });
  });
};
