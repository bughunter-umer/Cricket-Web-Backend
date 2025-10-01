import Match from "../models/Match.js";
import Team from "../models/Team.js";

export const getMatches = async (req, res) => {
  try {
    const matches = await Match.findAll({
      include: [{ model: Team, as: "TeamA" }, { model: Team, as: "TeamB" }, { model: Team, as: "Winner" }]
    });
    res.json(matches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addMatch = async (req, res) => {
  try {
    const match = await Match.create(req.body);
    res.json(match);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateMatch = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) return res.status(404).json({ error: "Match not found" });
    await match.update(req.body);
    res.json(match);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteMatch = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) return res.status(404).json({ error: "Match not found" });
    await match.destroy();
    res.json({ message: "Match deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


