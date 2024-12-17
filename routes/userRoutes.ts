import { Router } from 'express';
import { createUserData, fetchUserData, updateUserData } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/create-user-data', authMiddleware, createUserData);
router.put('/update-user-data', authMiddleware, updateUserData);
router.get('/fetch-user-data/:id', authMiddleware, fetchUserData);

export default router;
