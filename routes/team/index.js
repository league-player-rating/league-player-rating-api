import express from "express";
import returnSamples from "../returnSamples";
import verifyCardType from "../../utils/verifyCardType";

const router = express.Router();

router.get("/team/:team_id", async (req, res, next) => {
  const query = req.query;
  const team_id = req.params.team_id;

  if (!team_id) {
    res.status(500).send({
      success: "false",
      message: "Team not found"
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
  if (!verifyCardType("team", query.card)) {
    res.status(500).send({
      success: "false",
      message: "Invalid card name"
    })
    return;
  }
  // if (team_id !== "exists") {
  //   res.status(404).send({
  //     success: "false",
  //     message: "Player not found"
  //   })
  //   return;
  // }

  // Handle each card function in a separate function, imported separately.
  const data = await returnSamples.team[query.card];
  res.status(200).send({
    success: 'true',
    data
  })
})

module.exports = router;