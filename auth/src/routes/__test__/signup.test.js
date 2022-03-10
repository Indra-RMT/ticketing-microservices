const request = require("supertest");
const { app } = require("../../app");

it("returns a 201 on successful signup", () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test3@test.com",
      password: "test",
    })
    .expect(201);
});
