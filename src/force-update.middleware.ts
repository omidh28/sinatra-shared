import { Request, Response } from 'express';

export function forceUpdateMiddleware(req: Request, res: Response, next: Function) {
  res.header('Sinatra-Min-Api', '1.0.0');
  next();
};
