import Investor from "../models/Investor.js";

export const getInvestors = async (req, res) => {
  try {
    const investors = await Investor.findAll();
    res.json(investors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addInvestor = async (req, res) => {
  try {
    const investor = await Investor.create(req.body);
    res.json(investor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateInvestor = async (req, res) => {
  try {
    const investor = await Investor.findByPk(req.params.id);
    if (!investor) return res.status(404).json({ error: "Investor not found" });
    await investor.update(req.body);
    res.json(investor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteInvestor = async (req, res) => {
  try {
    const investor = await Investor.findByPk(req.params.id);
    if (!investor) return res.status(404).json({ error: "Investor not found" });
    await investor.destroy();
    res.json({ message: "Investor deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
