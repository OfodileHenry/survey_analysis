// mongodb+srv://henry:<password>@emaily-dev-cluster.hzwfi.mongodb.net/?retryWrites=true&w=majority
//
// mongodb+srv://henry:jehovahnissi5>@emaily-dev-cluster.hzwfi.mongodb.net/test

if (process.env.NODE_ENV === "production") {
  // we are in production - return the production set of keys.
} else {
  // we are in development - return the development set of keys.
  module.exports = require("./dev");
}
