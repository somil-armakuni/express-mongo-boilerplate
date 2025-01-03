import { Router } from 'express';
import { login, register } from '../../controllers/v1/auth.controller';

const router = Router();

// POST login
router.post('/login', login);

// POST register
router.post('/register', register);

export default router;
