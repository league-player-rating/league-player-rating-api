const pageTypes = ["player", "team"];

const validPlayerCards = [
  "meta",
  "win-rate",
  "kda",
  "kill-participation",
  "kill-share",
  "cs-per-minute",
  "unique-champions",
  "favorite-champions"
];

const validTeamCards = [
  "meta",
  "win-rate",
  "kda",
  "favorite-champions",
  "current-roster",
  "former-roster"
];

const verifyCardType = (page, cardType) => {
  if (pageTypes.includes(page)) {
    if (page === "player") {
      return validPlayerCards.includes(cardType);
    }
    if (page === "team") {
      return validTeamCards.includes(cardType);
    }
  }
  return false;
}

module.exports = verifyCardType;