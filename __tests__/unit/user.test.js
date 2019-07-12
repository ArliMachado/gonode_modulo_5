const bcrypt = require("bcryptjs");

const truncate = require("../utils/truncate");
const factory = require("../factories");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await factory.create("User", {
      password: "12345"
    });

    const compareHash = await bcrypt.compare("12345", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
