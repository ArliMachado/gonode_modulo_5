const routes = require("express").Router();

const { User } = require("./app/models");

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "Arli",
    email: "arli@mail.com",
    password_hash: "123"
  });
  return res.json({ user });
});

module.exports = routes;
