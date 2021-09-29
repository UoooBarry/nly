import { Request, Response, NextFunction } from 'express'
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  if(!req.headers.API_TOKEN || req.headers.API_TOKEN !== process.env.API_TOKEN) {
    res.json({status: 'forbidden', message: {}}).status(403);
  } else {
    next();
  }
}

export default verifyToken;
