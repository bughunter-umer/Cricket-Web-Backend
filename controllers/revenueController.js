import Revenue from "../models/Revenue.js";

export const getRevenues = async (req, res) => {
  try {
    const revenues = await Revenue.findAll();
    res.json(revenues);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addRevenue = async (req, res) => {
  try {
    const revenue = await Revenue.create(req.body);
    res.json(revenue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateRevenue = async (req, res) => {
  try {
    const revenue = await Revenue.findByPk(req.params.id);
    if (!revenue) return res.status(404).json({ error: "Revenue not found" });
    await revenue.update(req.body);
    res.json(revenue);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteRevenue = async (req, res) => {
  try {
    const revenue = await Revenue.findByPk(req.params.id);
    if (!revenue) return res.status(404).json({ error: "Revenue not found" });
    await revenue.destroy();
    res.json({ message: "Revenue deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
