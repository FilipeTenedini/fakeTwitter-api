import { Router } from 'express';
import TweetController from './controllers/TweetController.js';
import UserController from './controllers/UserController.js';

const router = Router();

router.post('/sign-up', UserController.create);
router.post('/tweets', TweetController.create);
router.get('/tweets', TweetController.index);
router.get('/tweets/:username', TweetController.show);
export default router;
