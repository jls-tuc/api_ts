import { Request, Response } from 'express';

export const getServer = async (req: Request, res: Response) => {
  res.json({ msg: 'Servidor funcionando OK' });
};
