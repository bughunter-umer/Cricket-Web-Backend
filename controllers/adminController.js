import Team from "../models/Team.js";
import Player from "../models/Player.js";
import Revenue from "../models/Revenue.js";
import Investor from "../models/Investor.js";
import User from "../models/User.js";
import Match from "../models/Match.js";

export const getDashboardStats = async (req, res) => {
  try {
    const teams = await Team.count();
    const players = await Player.count();
    const revenues = await Revenue.count();
    const investors = await Investor.count();
    const users = await User.count();
    res.json({ teams, players, revenues, investors, users });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getRecentMatches = async (req, res) => {
  try {
    const matches = await Match.findAll({
      limit: 5,
      order: [["match_date", "DESC"]],
      include: [
        { model: Team, as: "TeamA" },
        { model: Team, as: "TeamB" },
        { model: Team, as: "Winner" },
      ],
    });
    res.json(matches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
