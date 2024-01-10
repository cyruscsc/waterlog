import { NextFunction, Request, Response } from 'express';
import { AppError } from '../lib/errors';
import { serverLog } from '../lib/functions';

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  serverLog(err.name, '-', err.message);
  res.status(err.status).json({
    error: true,
    status: err.status,
    name: err.name,
    message: err.message,
  });
};

export default errorHandler;
