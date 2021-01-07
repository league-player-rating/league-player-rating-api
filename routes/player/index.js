import express from "express";
import returnSamples from "./returnSamples";
import verifyCardType from "../../utils/verifyCardType";

const router = express.Router();

router.get("/player/:player_id", async (req, res, next) => {
  const query = req.query;
  const player_id = req.params.player_id;

  if (!player_id) {
    res.status(500).send({
      success: "false",
      message: "Player not found"
    })
    return;
  }
  if (!query || !query.card) {
    res.status(500).send({
      success: "false",
      message: "card name not defined"
    })
    return;
  }
  if (!verifyCardType("player", query.card)) {
    res.status(500).send({
      success: "false",
      message: "Invalid card name"
    })
    return;
  }
  // if (player_id !== "exists") {
  //   res.status(404).send({
  //     success: "false",
  //     message: "Player not found"
  //   })
  //   return;
  // }

  // Handle each card function in a separate function, imported separately.
  const data = await returnSamples.player[query.card];
  res.status(200).send({
    success: 'true',
    data
  })
})

module.exports = router;