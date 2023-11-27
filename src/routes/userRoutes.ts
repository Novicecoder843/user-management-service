import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.patch('/users', userController.bulkUpdateUsers);
router.delete('/users', userController.bulkDeleteUsers);

export default router;
