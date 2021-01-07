import express from 'express';

import player from './player';

const router = express.Router();

router.use(player);


export default router;