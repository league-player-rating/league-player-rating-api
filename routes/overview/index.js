import express from "express";
import returnSamples from "../returnSamples";
import verifyCardType from "../../utils/verifyCardType";

const router = express.Router();

router.get("/overview/:page", async (req, res, next) => {
  const query = req.query;
  const page = req.params.page;

  if (!page) {
    res.status(500).send({
      success: "false",
      message: "This overview page is not supported"
    })
    return;
  }

  // Handle each card function in a separate function, imported separately.
  const data = await returnSamples[page].overview;
  res.status(200).send({
    success: 'true',
    data
  })
})

module.exports = router;