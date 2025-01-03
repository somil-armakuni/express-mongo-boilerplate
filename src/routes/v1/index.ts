import { Router } from 'express';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';

const router = Router();

// Define routes with their respective prefixes
router.use('/users', userRoutes);
router.use('/auth', authRoutes);

export default router;
