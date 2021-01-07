import express from 'express';

import player from './player';
import team from './team';

const router = express.Router();

router.use(player);
router.use(team);

export default router;