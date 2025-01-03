import { Router } from 'express';
import { createUser, getUserById, updateUser, deleteUser } from '../../controllers/v1/user.controller';

const router = Router();

router.post('/', createUser);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
