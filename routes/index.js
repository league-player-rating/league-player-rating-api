import express from 'express';

import overview from './overview';
import player from './player';
import team from './team';

const router = express.Router();

router.use(overview);
router.use(player);
router.use(team);

export default router;