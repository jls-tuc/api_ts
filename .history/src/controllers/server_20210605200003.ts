import { Request, Response } from 'express';

export const gerServer = async (req: Request, res: Response) => {
  res.json({ msg: 'Servidor funcionando OK' });
};
