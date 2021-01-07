const returnSamples = {
  player: {
    meta: {
      id: "1",
      firstName: "Luka",
      lastName: "Perkovic",
      ign: "Perkz",
      team: "G2 Esports",
      role: "mid",
      tournaments: [
        {
          tournament_name: "LEC 2019 Spring",
          placing: "1st",
        },
        {
          tournament_name: "LEC 2019 Summer",
          placing: "1st",
        }
      ],
      avatar: "url",
      rating: 96
    },
    "win-rate": {
      win_rate: 56.775,
      regional_rank: 3,
      global_rank: 19,
      is_above_average_rank: true,
      global_average_win_rate: 43
    },
    kda: {
      kda: 2.2,
      regional_rank: 9,
      global_rank: 54,
      is_above_average_rank: true,
      global_average_kda: 3.2
    },
    "kill-participation": {
      kill_participation: 96,
      regional_rank: 12,
      global_rank: 33,
      is_above_average_rank: true,
      global_average_kill_participation: 56.3
    },
    "kill-share": {
      kill_share: 35.4,
      regional_rank: 9,
      global_rank: 54,
      is_above_average_rank: false,
      global_average_kill_share: 27
    },
    "cs-per-minute": {
      cs_per_minute: 11.6,
      regional_rank: 12,
      global_rank: 33,
      is_above_average_rank: true,
      global_average_cs_per_minute: 9.8
    },
    "unique-champions": {
      unique_champions: 56,
      regional_rank: 1,
      global_rank: 1,
      is_above_average_rank: true,
      global_average_unique_champions: 25
    },
    "favorite-champions": [
      {
        champion: "Ryze",
        image: "ryze_img",
        win_rate: 55.8,
        games_played: 43,
        kda: 3.41
      },
      {
        champion: "Orianna",
        image: "orianna_img",
        win_rate: 56.7,
        games_played: 30,
        kda: 4.18
      },
      {
        champion: "Azir",
        image: "azir_img",
        win_rate: 72.4,
        games_played: 29,
        kda: 3.73
      },
      {
        champion: "LeBlanc",
        image: "leblanc_img",
        win_rate: 71.4,
        games_played: 28,
        kda: 5.5
      },
      {
        champion: "Syndra",
        image: "syndra_img",
        win_rate: 60,
        games_played: 25,
        kda: 3
      },
    ]
  }
}

module.exports = returnSamples;