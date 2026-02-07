const repo = require("../repository/weaponRepo");

function getAll(req, res) {
  res.json(repo.getAll());
}

function getById(req, res) {
  const weapon = repo.getById(req.params.id);
  if (!weapon) return res.status(404).json({ error: "Weapon not found" });
  res.json(weapon);
}

function create(req, res) {
  const { name, type, priceCredits, stock } = req.body;

  if (!name || !type || typeof priceCredits !== "number") {
    return res.status(400).json({ error: "Invalid data" });
  }

  const weapon = repo.create({
    name,
    type,
    priceCredits,
    stock: stock ?? 0
  });

  res.status(201).json(weapon);
}

function update(req, res) {
  const weapon = repo.update(req.params.id, req.body);
  if (!weapon) return res.status(404).json({ error: "Weapon not found" });
  res.json(weapon);
}

function remove(req, res) {
  const ok = repo.remove(req.params.id);
  if (!ok) return res.status(404).json({ error: "Weapon not found" });
  res.status(204).send();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
