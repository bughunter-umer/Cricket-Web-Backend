import Player from "../models/Player.js";
import Team from "../models/Team.js";

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll({ include: Team });
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.json(player);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (!player) return res.status(404).json({ error: "Player not found" });
    await player.update(req.body);
    res.json(player);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (!player) return res.status(404).json({ error: "Player not found" });
    await player.destroy();
    res.json({ message: "Player deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const buyPlayer = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (!player) return res.status(404).json({ error: "Player not found" });
    player.teamId = req.body.to_team_id;
    player.current_price = req.body.price;
    await player.save();
    res.json(player);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
