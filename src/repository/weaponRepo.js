const { v4: uuidv4 } = require("uuid");

let weapons = [];

function resetForTests() {
  weapons = [];
}

function getAll() {
  return weapons;
}

function getById(id) {
  return weapons.find(w => w.id === id);
}

function create(data) {
  const weapon = { id: uuidv4(), ...data };
  weapons.push(weapon);
  return weapon;
}

function update(id, patch) {
  const i = weapons.findIndex(w => w.id === id);
  if (i === -1) return null;
  weapons[i] = { ...weapons[i], ...patch };
  return weapons[i];
}

function remove(id) {
  const len = weapons.length;
  weapons = weapons.filter(w => w.id !== id);
  return weapons.length !== len;
}

module.exports = { resetForTests, getAll, getById, create, update, remove };
