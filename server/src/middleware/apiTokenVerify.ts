import { Request, Response, NextFunction } from 'express'
import Logger from '../config/logger'
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  if(!req.headers.api_token || req.headers.api_token !== process.env.API_TOKEN) {
    Logger.info(req.headers.api_token);
    Logger.info(req.headers.API_TOKEN);
    res.json({status: 'forbidden', message: {}}).status(403);
  } else {
    next();
  }
}

export default verifyToken;
