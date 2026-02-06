const request = require("supertest");
const app = require("../src/app");
const repo = require("../src/repository/weaponRepo");

beforeEach(() => repo.resetForTests());

test("POST /weapons creates weapon", async () => {
  const res = await request(app)
    .post("/weapons")
    .send({ name: "Blaster", type: "Energy", priceCredits: 1000 });

  expect(res.statusCode).toBe(201);
});

test("GET /weapons returns list", async () => {
  await request(app).post("/weapons").send({ name: "Blaster", type: "Energy", priceCredits: 1000 });
  const res = await request(app).get("/weapons");
  expect(res.body.length).toBe(1);
});

test("DELETE /weapons removes weapon", async () => {
  const created = await request(app)
    .post("/weapons")
    .send({ name: "Laser Rifle", type: "Heavy", priceCredits: 2000 });

  const res = await request(app).delete(`/weapons/${created.body.id}`);
  expect(res.statusCode).toBe(204);
});
