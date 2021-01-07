import express from 'express';

import test from './test';
import user from './user';

const router = express.Router();

router.use(test);
router.use(user);


export default router;