import { Router } from 'express';
import UserController from './controllers/UserController.js';

const router = Router();

router.post('/sign-up', UserController.create);
export default router;
