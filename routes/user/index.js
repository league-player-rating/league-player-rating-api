import express from "express";

const router = express.Router();

router.post('/add-user', (req, res, next) => {
  console.log(req.body);
  /*
    {
      firstName: Hayo,
      lastNamne: Friese,
      email: hayo.friese@gmail.com,
      password: test,
      type: admin / user // admin can add users,
      
    }
  */
})

router.get('/user', (req, res, next) => {
  /*
    {
      firstName: Hayo,
      lastNamne: Friese,
      email: hayo.friese@gmail.com,
      password: test,
      type: admin / user // admin can add users,
    }
  */
  console.dir(req.body);
  res.status(200).send({
    success: 'true',
    message: 'Successfully logged in',
    data: {
      firstName: "Hayo",
      lastName: "Friese",
      email: req.body.email,
      type: "admin", // admin can add users,
      created_at: "2020-01-01",
      last_updated: "2020-07-01",
    }
  })
})

module.exports = router;