import express from "express";

const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send({
    success: 'true',
    message: 'API Accessed Successfully',
    data: {
      msg: 'Hello World'
    }
  })
})

module.exports = router;