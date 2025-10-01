import Trophy from "../models/Trophy.js";
import Team from "../models/Team.js";

export const getTrophies = async (req, res) => {
  try {
    const trophies = await Trophy.findAll({ include: { model: Team, as: "Winner" } });
    res.json(trophies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addTrophy = async (req, res) => {
  try {
    const trophy = await Trophy.create(req.body);
    res.json(trophy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTrophy = async (req, res) => {
  try {
    const trophy = await Trophy.findByPk(req.params.id);
    if (!trophy) return res.status(404).json({ error: "Trophy not found" });
    await trophy.update(req.body);
    res.json(trophy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteTrophy = async (req, res) => {
  try {
    const trophy = await Trophy.findByPk(req.params.id);
    if (!trophy) return res.status(404).json({ error: "Trophy not found" });
    await trophy.destroy();
    res.json({ message: "Trophy deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


