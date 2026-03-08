const jwt = require("jsonwebtoken");

const token = jwt.sign(
  { userId: "testUser" },
  "supersecret",
  { expiresIn: "1h" }
);

console.log("JWT Token:");
console.log(token);