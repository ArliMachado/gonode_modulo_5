const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Arli",
      email: "arli@mail.com",
      password: "12345"
    });

    const compareHash = await bcrypt.compare("12345", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
