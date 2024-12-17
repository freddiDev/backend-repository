import { RequestHandler } from 'express';

export const authMiddleware: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }

    
  if (token !== 'secret-token') {
    res.status(403).json({ message: 'Invalid token' });
    return;
  }

  next();
};
